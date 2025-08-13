export function initMobileMenu() {
  console.log("ĐÃ VÀO ĐÂY RỒI NÈ");

  const btn = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  const loginBtn = document.getElementById('loginToggleBtn');
  const loginDropdown = document.getElementById('loginDropdown');

  // ======= Helpers =======
  const openBodyLock = () => document.body.classList.add('mobile-menu-open');
  const closeBodyLock = () => document.body.classList.remove('mobile-menu-open');

  // Gắn class has-submenu + submenu nếu li có ul con
  function normalizeSubmenus() {
    if (!menu) return;
    const listItems = menu.querySelectorAll('li');
    listItems.forEach(li => {
      const childUl = li.querySelector(':scope > ul');
      if (childUl) {
        li.classList.add('has-submenu');
        childUl.classList.add('submenu'); // match CSS .submenu
        // Thêm button indicator (aria) nếu cần
        const trigger = li.querySelector(':scope > a');
        if (trigger && !trigger.dataset.boundSubmenu) {
          trigger.setAttribute('aria-haspopup', 'true');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.dataset.boundSubmenu = 'true';
        }
      }
    });
  }

  // Đóng tất cả submenu
  function closeAllSubmenus() {
    menu?.querySelectorAll('.has-submenu.show, .has-submenu.open').forEach(li => {
      li.classList.remove('show', 'open');
      const a = li.querySelector(':scope > a[aria-expanded]');
      if (a) a.setAttribute('aria-expanded', 'false');
    });
  }

  // ======= HAMBURGER MENU =======
  if (!btn || !menu) {
    console.warn("Không tìm thấy hamburger hoặc menu");
  } else {
    // Chuẩn hóa cấu trúc submenu theo HTML hiện tại
    normalizeSubmenus();

    // Mở/đóng menu
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !menu.classList.contains('active');
      menu.classList.toggle('active');
      btn.classList.toggle('is-active', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));

      if (willOpen) {
        openBodyLock();
      } else {
        closeBodyLock();
        closeAllSubmenus();
      }
    });

    // Ngăn cuộn nền (iOS) khi chạm trong menu
    const preventScroll = (ev) => {
      // Cho phép scroll bên trong menu khi nội dung dài
      const target = ev.target;
      const scrollable = target.closest('.mobile-menu, .submenu');
      if (!scrollable) {
        ev.preventDefault();
      }
    };
    // passive:false để có thể preventDefault
    menu.addEventListener('touchmove', preventScroll, { passive: false });

    // Đóng menu khi click ra ngoài
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          btn.classList.remove('is-active');
          btn.setAttribute('aria-expanded', 'false');
          closeBodyLock();
          closeAllSubmenus();
        }
      }
    });

    // Đóng menu khi nhấn ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
        btn.classList.remove('is-active');
        btn.setAttribute('aria-expanded', 'false');
        closeBodyLock();
        closeAllSubmenus();
      }
    });
  }

  // ======= LOGIN DROPDOWN =======
  if (!loginBtn || !loginDropdown) {
    console.warn("Không tìm thấy loginToggleBtn hoặc loginDropdown");
  } else {
    loginBtn.setAttribute('aria-expanded', 'false');

    loginBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const willOpen = !loginDropdown.classList.contains('show');
      // Đóng trước để đảm bảo chỉ 1 trạng thái
      loginDropdown.classList.toggle('show', willOpen);
      loginBtn.setAttribute('aria-expanded', String(willOpen));
    });

    document.addEventListener('click', function (e) {
      if (!loginDropdown.contains(e.target) && !loginBtn.contains(e.target)) {
        if (loginDropdown.classList.contains('show')) {
          loginDropdown.classList.remove('show');
          loginBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // ======= SUBMENU (Menu cấp 2) =======
  // Hỗ trợ cả cấu trúc chưa có class .menu-item.has-submenu
  function bindSubmenuToggles() {
    if (!menu) return;

    // Tất cả <li> có submenu
    const submenuParents = menu.querySelectorAll('.has-submenu');

    submenuParents.forEach((item) => {
      const trigger = item.querySelector(':scope > a');
      if (!trigger || trigger.dataset.boundClick === 'true') return;

      trigger.dataset.boundClick = 'true';
      trigger.addEventListener('click', function (e) {
        // Nếu có submenu thì chặn điều hướng
        const childUl = item.querySelector(':scope > .submenu, :scope > ul');
        if (childUl) {
          e.preventDefault();
          e.stopPropagation();

          const isOpen = item.classList.contains('show') || item.classList.contains('open');

          // Đóng tất cả trước
          menu.querySelectorAll('.has-submenu').forEach(li => {
            li.classList.remove('show', 'open');
            const a = li.querySelector(':scope > a[aria-expanded]');
            if (a) a.setAttribute('aria-expanded', 'false');
          });

          // Mở lại nếu trước đó chưa mở
          if (!isOpen) {
            item.classList.add('show'); // dùng 'show' để khớp CSS .has-submenu.show > .submenu
            trigger.setAttribute('aria-expanded', 'true');
          }
        }
      });
    });

    // Click ra ngoài vùng menu để đóng tất cả submenu
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target)) {
        closeAllSubmenus();
      }
    });

    // Khi click một link con trong submenu -> đóng toàn bộ menu
    menu.querySelectorAll('.submenu a').forEach(a => {
      if (a.dataset.boundClose === 'true') return;
      a.dataset.boundClose = 'true';
      a.addEventListener('click', () => {
        // Cho phép điều hướng bình thường, chỉ đóng UI
        closeAllSubmenus();
        if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          const btn = document.getElementById('hamburgerBtn');
          if (btn) {
            btn.classList.remove('is-active');
            btn.setAttribute('aria-expanded', 'false');
          }
          closeBodyLock();
        }
      });
    });
  }

  bindSubmenuToggles();

  // ======= Optional: đồng bộ class sáng cho hamburger lines =======
  // Khi menu active -> thêm class .is-active để anh CSS cho 3 gạch sáng hơn
  // CSS gợi ý:
  // .hamburger-btn.is-active .hamburger-line { background-color: #ffd600; }
}

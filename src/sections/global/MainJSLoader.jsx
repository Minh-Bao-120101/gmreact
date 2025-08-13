import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MainJSLoader() {
  const location = useLocation();

  useEffect(() => {
    import("../../js/main.js")
      .then((module) => {
        if (module.bootGM) module.bootGM();
      })
      .catch((err) => console.error("Failed to load main.js:", err));
  }, [location]);

  return null;
}

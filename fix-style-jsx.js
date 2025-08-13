// fix-style-jsx.js
import fs from 'fs';
import { glob } from 'glob';

/**
 * Chuyển CSS string sang object JSX
 */
function cssToJsxObject(cssString) {
  const obj = {};
  cssString.split(';').forEach((rule) => {
    if (!rule.trim()) return;
    const [key, value] = rule.split(':').map(s => s.trim());
    if (!key || !value) return;
    const camelKey = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    obj[camelKey] = value;
  });
  return obj;
}

/**
 * Chuyển object thành string JSX chuẩn: style={{ ... }}
 */
function jsxObjectToString(obj) {
  const entries = Object.entries(obj).map(([k, v]) => `${k}: '${v}'`);
  return `{{ ${entries.join(', ')} }}`; // <-- 2 dấu { } như chuẩn JSX
}

const fixFiles = async () => {
  const files = await glob('src/**/*.jsx');

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');

    const regex = /style="([^"]*?)"/g;
    let match;
    let changed = false;

    while ((match = regex.exec(content)) !== null) {
      const cssString = match[1];
      const jsxObj = cssToJsxObject(cssString);
      const jsxString = jsxObjectToString(jsxObj);
      content = content.replace(match[0], `style=${jsxString}`);
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Đã fix style JSX: ${file}`);
    }
  }
};

fixFiles();

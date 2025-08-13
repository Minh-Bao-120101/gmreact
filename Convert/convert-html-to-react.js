import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";

const rootDir = "E:/GM code/gmreact/Convert";
const folders = ["pages", "sections"];

// Đổi sang PascalCase
function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

// Chuyển HTML sang JSX chuẩn React
function htmlToJSX(html) {
  return html
    .replace(/class=/g, "className=")
    .replace(/\bfor=/g, "htmlFor=")
    // Chuyển event handler sang camelCase React
    .replace(/\bonclick=/gi, "onClick=")
    .replace(/\bonchange=/gi, "onChange=")
    .replace(/\boninput=/gi, "onInput=")
    .replace(/\bonfocus=/gi, "onFocus=")
    .replace(/\bonblur=/gi, "onBlur=")
    .replace(/\bonmouseover=/gi, "onMouseOver=")
    .replace(/\bonmouseout=/gi, "onMouseOut=")
    .replace(/\bonsubmit=/gi, "onSubmit=")
    // Tự đóng thẻ đơn
    .replace(/<(\s*(img|input|br|hr|meta|link)([^>]*)?)>/g, "<$1 />");
}

// Tạo function component React
function wrapInComponent(fileName, jsxContent) {
  const componentName = toPascalCase(path.basename(fileName, ".html"));
  return `import React from "react";

export default function ${componentName}() {
  return (
    <>
${jsxContent
  .split("\n")
  .map((line) => "      " + line)
  .join("\n")}
    </>
  );
}
`;
}

function convertHtmlFile(filePath) {
  let htmlContent = fs.readFileSync(filePath, "utf8");

  // Xóa comment HTML
  htmlContent = htmlContent.replace(/<!--[\s\S]*?-->/g, "");

  const dom = new JSDOM(htmlContent);

  // Xóa <script> và <style>
  dom.window.document.querySelectorAll("script, style").forEach((el) => el.remove());

  const bodyContent = dom.window.document.body.innerHTML;
  const jsxContent = htmlToJSX(bodyContent);
  const componentCode = wrapInComponent(path.basename(filePath), jsxContent);

  const outFile = filePath.replace(".html", ".jsx");
  fs.writeFileSync(outFile, componentCode, "utf8");
  console.log(`✅ Converted: ${filePath} → ${outFile}`);
}

// Quét thư mục con
function scanDirRecursive(dirPath) {
  fs.readdirSync(dirPath, { withFileTypes: true }).forEach((entry) => {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      scanDirRecursive(entryPath);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      convertHtmlFile(entryPath);
    }
  });
}

// Chạy quét
folders.forEach((folder) => {
  const dirPath = path.join(rootDir, folder);
  scanDirRecursive(dirPath);
});

const { name } = require("@luhengchang228/nodejs-modules-conditional-exports");
console.log("name: ", name);

const { desc } = require("@luhengchang228/nodejs-modules-subpath-exports");
const {
  desc: subModuleDesc,
} = require("@luhengchang228/nodejs-modules-subpath-exports/submodule");
console.log("desc: ", desc);
console.log("subModuleDesc: ", subModuleDesc);

// 在 cjs 模块中加载 esm 模块
(async () => {
  console.log(
    "dynamic import in cjs",
    await import("@luhengchang228/nodejs-modules-conditional-exports")
  );
})();

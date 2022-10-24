// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-config/patch/modern-module-resolution");

module.exports = {
  extends: ["@rushstack/eslint-config/profile/node"],
  parserOptions: { tsconfigRootDir: __dirname },
};

// Note: If your project uses the React framework, you should also extend from the "@rushstack/eslint-config/mixins/react" mixin.
// See the documentation for details about @rushstack/eslint-config "profiles" and "mixins".

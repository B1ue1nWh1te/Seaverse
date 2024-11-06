/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-min-length": [2, "always", 3],
    "type-enum": [2, "always", ["feat", "optimize", "fix", "revert"]],
    "type-empty": [2, "never"],
    "subject-min-length": [2, "always", 6],
    "subject-empty": [2, "never"],
    "subject-case": [0],
  },
};

export default config;
#
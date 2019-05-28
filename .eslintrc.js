module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "arrow-spacing": 2,
    semi: [2, 'never'],
    camelcase: 2,
    'no-unused-vars': 1,
    'no-undef': 1,
    'eol-last': 1,
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};

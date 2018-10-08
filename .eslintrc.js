module.exports = {
  "extends": "@auxilin/eslint-config",
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "src",
          "node_modules"
        ]
      }
    }
  },
};

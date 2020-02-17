module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "\\.(css|less|scss)$": "./jest/stub-transformer.js"
  }
};

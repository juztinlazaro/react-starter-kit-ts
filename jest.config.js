module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  modulePaths: ["<rootDir>/src/"],
  setupFiles: ["raf/polyfill", "jest-useragent-mock"],
  moduleNameMapper: {
    "components/(.*)": "<rootDir>/src/components/$1",
    "common/(.*)": "<rootDir>/src/common/$1",
    "module/(.*)": "<rootDir>/src/module/$1",
    "stores/(.*)": "<rootDir>/src/stores/$1",
    "appRoot/(.*)": "<rootDir>/src/appRoot/$1",
    "src/(.*)": "<rootDir>/src/$1",
  },
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "node",
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
};

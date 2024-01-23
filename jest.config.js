// import { AutoImports } from 'unplugin-auto-import/vite'
const { AutoImport } = require('unplugin-auto-import/vite');

module.exports = {
    // plugins: {
    //     AutoImport({imports: ['vue']})
    // },
    verbose: true,
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "vue"],
    moduleNameMapper: {
      "^@/(.*)": "<rootDir>/$1",
    },
    transform: {
      "^.+\\.(js)$": "babel-jest",
      ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
      ".*\\.(vue)$": "@vue/vue3-jest",
    },
    transformIgnorePatterns: ["node_modules/(?!(nuxt3|unenv))"],
};
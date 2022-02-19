<<<<<<< HEAD
module.exports = {
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
};
=======
// https://prettier.io/docs/en/options.html
/** @type {import('prettier').RequiredOptions} */
module.exports = {
  trailingComma: 'es5',
  bracketSpacing: true,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  overrides: [
    {
      files: 'Routes.*',
      options: {
        printWidth: 999,
      },
    },
  ],
}
>>>>>>> 4320517 (First commit)

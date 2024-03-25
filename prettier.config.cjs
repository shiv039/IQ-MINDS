module.exports = {
  tailwindConfig: './tailwind.config.cjs',
  plugins: [
    import('prettier-plugin-tailwindcss').then((module) => module.default),
  ],
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
};

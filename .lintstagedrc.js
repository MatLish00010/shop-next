const path = require('path');

// const buildEslintCommand = (filenames) =>
//   `next lint --fix --file ${filenames
//     .map((f) => path.relative(process.cwd(), f))
//     .join(" --file ")}`;

// module.exports = {
//   "*.{js,jsx,ts,tsx}": [buildEslintCommand],
// };

module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};

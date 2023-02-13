module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => ['yarn tsc --noEmit', 'yarn lint --fix'],

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}

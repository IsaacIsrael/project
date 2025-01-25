export default {
  '*': ['prettier --list-different', 'eslint'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};

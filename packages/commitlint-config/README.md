# @guillaumecatel/commitlint-config

> CommitLint [shareable config](https://commitlint.js.org/#/concepts-shareable-config) for commit message style.

## Installation

```bash
pnpm add -D @guillaumecatel/commitlint-config

# with CommitLint
pnpm add -D @commitlint/cli @guillaumecatel/commitlint-config
```

## Usage

In order to use this config, choose the one you want and add this configuration to your `.commitlintrc.js` file to your project root containing:

```diff
module.exports = {
  extends: [
+   '@guillaumecatel/commitlint-config'
  ]
}
```

## License
MIT

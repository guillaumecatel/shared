# @guillaumecatel/stylelint-config

> StyleLint [shareable config](https://stylelint.io/#features) for CSS style.

## Installation

```bash
pnpm add -D @guillaumecatel/stylelint-config

# with StyleLint
pnpm add -D stylelint @guillaumecatel/stylelint-config
```

## Usage

In order to use this config, choose the one you want and add this configuration to your `package.json`:

```diff
{
 "stylelint": {
   "extends": [
+    "@guillaumecatel/stylelint-config"
   ]
 }
}
```

Or add a `.stylelintrc.js` file to your project root containing:

```diff
module.exports = {
  extends: [
+   '@guillaumecatel/stylelint-config'
  ]
}
```

## VSCode integration
We recommend turning on VSCode settings to automatically run `stylelint --fix` on save.

```diff
"editor.codeActionsOnSave": {
+  "source.fixAll.stylelint": true
}
```

This will automatically format your code once you save.

## License
MIT

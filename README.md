# Console Log Commenter

## Overview
Console Log Commenter is a Visual Studio Code extension that automatically comments out all `console.log` statements in your currently active JavaScript or TypeScript file. This extension is perfect for quickly cleaning up your code before deployment or when you need to temporarily disable logging.

## Features
- Comments out all `console.log` statements in the active file
- Supports both single-line and multi-line `console.log` statements
- Preserves original indentation
- Works with both JavaScript (.js) and TypeScript (.ts) files

## Installation
1. Open Visual Studio Code
2. Go to the Extensions view by clicking on the square icon in the left sidebar or pressing `Ctrl+Shift+X`
3. Search for "Console Log Commenter"
4. Click on the "Install" button

## Usage
1. Open a JavaScript or TypeScript file in VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette
3. Type "Console Log" and select "Console Log: Comment out console logs"
4. All `console.log` statements in the current file will be commented out

Alternatively, you can right-click in the editor and select "Console Log" from the context menu.

## Example
Before:
```javascript
console.log('Hello, world!');
console.log(
  'This is a multi-line',
  'console log statement'
);
```

After:
```javascript
// console.log('Hello, world!');
// console.log(
//   'This is a multi-line',
//   'console log statement'
// );
```

## Configuration
Currently, this extension does not require any additional configuration. It works out of the box!

## Known Issues
- The extension currently only works on the active file, not across the entire workspace.
- It does not uncomment previously commented `console.log` statements.

## Feedback and Contributions
Your feedback and contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/willy-bit/ConsoleLog).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy using Console Log Commenter! If you find it helpful, please consider leaving a review on the VS Code Marketplace.

## For more information

* [Visual Studio Code's Extension Support](https://code.visualstudio.com/api)

**Enjoy!**




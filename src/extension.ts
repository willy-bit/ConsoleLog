// // Quickstart form VScode
// // The module 'vscode' contains the VS Code extensibility API
// // Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';

// // This method is called when your extension is activated
// // Your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {

// 	// Use the console to output diagnostic information (console.log) and errors (console.error)
// 	// This line of code will only be executed once when your extension is activated
// 	console.log('Congratulations, your extension "consolelog" is now active!');

// 	// The command has been defined in the package.json file
// 	// Now provide the implementation of the command with registerCommand
// 	// The commandId parameter must match the command field in package.json
// 	const disposable = vscode.commands.registerCommand('extension.commentOutConsoleLogs', () => {
// 		// The code you place here will be executed every time your command is executed
// 		// Display a message box to the user
// 		vscode.window.showInformationMessage('Hello from //ConsoleLog!');
// 	});

// 	context.subscriptions.push(disposable);
// }

// // This method is called when your extension is deactivated
// export function deactivate() {}




/* This implementation comments out all Console log statements in the currently open active file in the editor using vscode.window.activeTextEditor
   This only applies to .js and/or .ts files
*/


import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.commentOutConsoleLogs', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const text = document.getText();

            // Updated regex to capture multi-line console.log statements
            const regex = /console\.log\(([\s\S]*?)\);?/g;
            const edits: vscode.TextEdit[] = [];

            let match;
            while ((match = regex.exec(text)) !== null) {
                const startPos = document.positionAt(match.index);
                const endPos = document.positionAt(match.index + match[0].length);

                // Split the matched content into lines
                const lines = match[0].split('\n');

                // Comment out each line individually
                const commentedLines = lines.map((line, index) => {
                    // Add '//' to the beginning of each line, preserving indentation
                    const trimmedLine = line.trimStart(); // trimLeft() is deprecated, we used trimStart()
                    const indentation = line.slice(0, line.length - trimmedLine.length);
                    return `${indentation}// ${trimmedLine}`;
                });

                // Join the commented lines back together
                const commentedText = commentedLines.join('\n');

                // Create a range for the entire matched console.log
                const range = new vscode.Range(startPos, endPos);
                
                // Replace the original text with the commented version
                edits.push(vscode.TextEdit.replace(range, commentedText));
            }

            // Apply the edits to the document
            const workspaceEdit = new vscode.WorkspaceEdit();
            workspaceEdit.set(document.uri, edits);
            vscode.workspace.applyEdit(workspaceEdit);
        }
        // Notify the user when done
        vscode.window.showInformationMessage('All console.log statements in this file have been commented out.');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}







/*
 * This implementation scans for all files in the entire workspace using vscode.workspace.findFiles
 * The first argument, /*.js targets JavaScript files, but you can adjust this to fit other file types (e.g., .ts for TypeScript)
 * or  (/*.{js,ts}) for multiple files. 
 * The second argument is a glob pattern to exclude certain files (e.g., node_modules).
 */



// import * as vscode from 'vscode';

// export function activate(context: vscode.ExtensionContext) {
//     let disposable = vscode.commands.registerCommand('extension.commentOutConsoleLogs', async () => {
//         // Get all the files in the workspace (filtering for JS and TS files, excluding node_modules)
//         const files = await vscode.workspace.findFiles('**/*.{js,ts}', '**/node_modules/**');

//         let totalCommentsAdded = 0;

//         // Loop through each file
//         for (const file of files) {
//             const document = await vscode.workspace.openTextDocument(file);
//             const text = document.getText();

//             // Updated regex to capture multi-line console.log statements
//             const regex = /console\.log\(([\s\S]*?)\);?/g;
//             const edits: vscode.TextEdit[] = [];

//             let match;
//             while ((match = regex.exec(text)) !== null) {
//                 const startPos = document.positionAt(match.index);
//                 const endPos = document.positionAt(match.index + match[0].length);

//                 // Split the matched content into lines
//                 const lines = match[0].split('\n');

//                 // Comment out each line
//                 const commentedLines = lines.map((line) => {
//                     const trimmedLine = line.trimStart();
//                     const indentation = line.slice(0, line.length - trimmedLine.length);
//                     return `${indentation}// ${trimmedLine}`;
//                 });

//                 // Join the commented lines back together
//                 const commentedText = commentedLines.join('\n');

//                 // Create a range for the entire matched console.log
//                 const range = new vscode.Range(startPos, endPos);
                
//                 // Replace the original text with the commented version
//                 edits.push(vscode.TextEdit.replace(range, commentedText));
//             }

//             // If there are edits, apply them
//             if (edits.length > 0) {
//                 const workspaceEdit = new vscode.WorkspaceEdit();
//                 workspaceEdit.set(document.uri, edits);
//                 await vscode.workspace.applyEdit(workspaceEdit);
//                 await document.save();
//                 totalCommentsAdded += edits.length;
//             }
//         }

//         // Notify the user when done
//         vscode.window.showInformationMessage(`Commented out ${totalCommentsAdded} console.log statement(s) across the workspace.`);
//     });

//     context.subscriptions.push(disposable);
// }

// export function deactivate() {}



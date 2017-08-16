const vscode = require('vscode');
const keytar = require('keytar');

function activate(context) {

    const disposable = vscode.commands.registerCommand('keytar-putter.put', function () {

        const service = "example service";
        const account = "example account";
        
        keytar.setPassword(service, account, "qwertyuiop").then(function() {
            return keytar.getPassword(service, account)
        }).then(function(password){
            vscode.window.showInformationMessage(`Stored Password: ${password}`);
        });
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}

exports.deactivate = deactivate;
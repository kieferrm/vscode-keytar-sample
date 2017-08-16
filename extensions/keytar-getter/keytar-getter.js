const vscode = require('vscode');
const keytar = require('keytar');

function activate(context) {

    const disposable = vscode.commands.registerCommand('keytar-getter.get', function () {

        const service = "example service";
        const account = "example account";

        return keytar.getPassword(service, account).then(function (password) {
            vscode.window.showInformationMessage(`Retrieved Password: ${password}`);
        });
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}

exports.deactivate = deactivate;
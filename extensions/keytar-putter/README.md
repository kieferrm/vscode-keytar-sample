### Keytar Putter

Stores a credential in the keychain.

This uses Keytar, which needs to be compiled against the electron version VS Code uses. Currently it uses electron 1.7.9. For a different electron version, update the `../.yarnrc` file. You can find the electron version VC Code uses in the About Dialog or you can open Developer Tools and eval `process.versions`.

You compile using `yarn install` or when using `npm` you use 
`npm install --runtime=electron --target=1.7.9 --disturl=https://atom.io/download/electron`
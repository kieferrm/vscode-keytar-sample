Demo usage of keytar. This is primarily to show the differences of credential management on macOS and Windows. 

This uses the insider of VS Code that's build using electron 1.7.9. For a different electron version, update the `extensions/.yarnrc` file. You can find the electron version VC Code uses in the About Dialog or you can open Developer Tools and eval `process.versions`.

> Note: If you use `npm` instead of `yarn` you need to explicitly specify what electron version the extensions need to be compiled against. You would compile them like:
> 1. `cd extensions/keytar-getter`
> 2. `npm install --runtime=electron --target=1.7.9 --disturl=https://atom.io/download/electron`

### On Mac
1. `yarn run build`
2. `yarn run sample` The sample uses two node processes, one writing credentials and the other retrieving them.
3. If code-insiders is running, quit it.
4. `yarn start`
5. <kbd>Cmd+Shift+P</kbd> > `Keytar 2: Retrieve Credential` An extension reads the credentials one of the node processes wrote in step 2.
6. <kbd>Cmd+Shift+P</kbd> > `Keytar 1: Store Credential` An extension overwrites the credentials the node process wrote in step 2.
7. <kbd>Cmd+Shift+P</kbd> > `Keytar 2: Retrieve Credential` An extension reads the credentials written by another extension in step 6.


### On Windows
The following steps use Git Bash.

1. To compile native modules you need Python and a C++ toolchain. If you don't have one, use `yarn install --global --production windows-build-tools` to install it. 
2. `yarn install`
3. `yarn run sample`
4. `cd extensions/keytar-getter`
5. `yarn install`
6. `cd ../keytar-putter`
7. `yarn install`
8. `cd ../..`
9. `yarn start`
10. <kbd>Ctrl+Shift+P</kbd> > `Keytar 2: Retrieve Credential` An extension reads the credentials one of the node processes wrote in step 3.
11. <kbd>Ctrl+Shift+P</kbd> > `Keytar 1: Store Credential` An extension overwrites the credentials the node process wrote in step 3.
12. <kbd>Ctrl+Shift+P</kbd> > `Keytar 2: Retrieve Credential` An extension reads the credentials written by another extension in step 11.
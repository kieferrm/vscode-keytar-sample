Demo usage of keytar.

This uses the insider of VS Code that's build using electron 1.7.4. For a different electron version, update the build script.

### On Mac
1. `npm run build`
2. `npm run sample` The sample uses two node processes, one writing credentials and the other retrieving them.
3. If code-insiders is running, quit it.
4. `npm start`
5. <kbd>Cmd+Shift+P</kbd> > `Keytar 2: Retrieve Credential` An extension reads the credentials one of the node processes wrote in step 2.
6. <kbd>Cmd+Shift+P</kbd> > `Keytar 1: Store Credential` An extension overwrites the credentials the node process wrote in step 2.
7. <kbd>Cmd+Shift+P</kbd> > `Keytar 2: Retrieve Credential` An extension reads the credentials written by another extension in step 6.


### On Windows
The following steps use Git Bash.

1. To compile native modules you need Python and a C++ toolchain. If you don't have one, use `npm install --global --production windows-build-tools` to install it. 
2. `npm install`
3. `npm run sample`
4. `cd extensions/keytar-getter`
5. `npm install --runtime=electron --target=1.7.4 --disturl=https://atom.io/download/atom-shell`
6. `cd ../keytar-putter`
7. `npm install --runtime=electron --target=1.7.4 --disturl=https://atom.io/download/atom-shell`
8. `cd ../..`
9. `npm start`
10. <kbd>Ctrl+Shift+P</kbd> > `Keytar 2: Retrieve Credential` An extension reads the credentials one of the node processes wrote in step 3.
11. <kbd>Ctrl+Shift+P</kbd> > `Keytar 1: Store Credential` An extension overwrites the credentials the node process wrote in step 3.
12. <kbd>Ctrl+Shift+P</kbd> > `Keytar 2: Retrieve Credential` An extension reads the credentials written by another extension in step 11.
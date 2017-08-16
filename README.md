Demo usage of keytar.

This uses the latest insider of VS Code using electron 1.7.4.

1. `npm run build`
2. `npm run sample` The sample uses two node processes, one writing credentials and the other retrieving them.
3. If code-insiders is running, quit it.
4. `npm start`
5. <kbd>Cmd+Shift+P</kbd> > `Keytar 2: Retrieve Credential` An extension reads the credentials one of the node processes wrote in step 2.
6. <kbd>Cmd+Shift+P</kbd> > `Keytar 1: Store Credential` An extension overwrites the credentials the node process wrote in step 2.
7. <kbd>Cmd+Shift+P</kbd> > `Keytar 2: Retrieve Credential` An extension reads the credentials written by another extension in step 6.
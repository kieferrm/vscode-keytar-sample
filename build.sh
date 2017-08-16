#!/bin/bash

npm install

(cd extensions/keytar-getter && npm install --runtime=electron --target=1.7.4 --disturl=https://atom.io/download/atom-shell)&
(cd extensions/keytar-putter && npm install --runtime=electron --target=1.7.4 --disturl=https://atom.io/download/atom-shell)&
wait


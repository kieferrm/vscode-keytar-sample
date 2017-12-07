#!/bin/bash

yarn install

(cd extensions/keytar-getter && yarn install)&
(cd extensions/keytar-putter && yarn install)&
wait


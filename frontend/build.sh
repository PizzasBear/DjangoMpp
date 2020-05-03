#!/usr/bin/bash

originalDir="$(pwd)"
cd $(dirname $0)

rm ../backend/static/js -r
tsc
cp css ../backend/static -r
cp imgs ../backend/static -r
cp templates ../backend -r

cd $originalDir
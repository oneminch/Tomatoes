#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'Deploy to GitHub Pages'

git push -f git@github.com:oneminch/pomo.git master:gh-pages

cd -

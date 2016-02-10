#!/bin/bash
echo "Starting deployment"  
echo "Target: gh-pages branch"

CURRENT_COMMIT=`git rev-parse HEAD`  
ORIGIN_URL=`git config --get remote.origin.url`  
ORIGIN_URL_WITH_CREDENTIALS=${ORIGIN_URL/\/\/github.com/\/\/$GH_TOKEN@github.com}

echo "Sanity check no existing temp folder"
rm -rf out || exit 0;
echo "Create temp folder"
mkdir out; 
( cd out
 git init || exit 1
 git config user.name "ChrisMurphy" || exit 1  
 git config user.email "monkeeman69@googlemail.com" || exit 1
 echo "Copying required files"
 cp ../index.html ./index.html
 cp -r ../coverage ./coverage
 cp -r ../examples ./examples
 git add .
 git commit -m "Regenerated static content for $CURRENT_COMMIT" || exit 1
 echo "Pushing new content to $ORIGIN_URL"
 git push --force --quiet "$ORIGIN_URL_WITH_CREDENTIALS" master:gh-pages > /dev/null 2>&1
)

echo "Deployed successfully."  
exit 0  
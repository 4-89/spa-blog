mkdir ./dist/articles
processmd "./src/assets/articles/md/*" --stdout --preview 200 --outputDir "./dist/articles" > "./src/assets/articles/archive.json"
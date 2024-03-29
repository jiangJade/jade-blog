#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run docs:build
# yarn build

# 进入生成的文件夹
# cd docs/.vuepress/dist
cd public

# echo 'blog.myitsky.com' > CNAME

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# git push -f git@github.com:AlvinMi/Developer-notes.git master:gh-pages
git push -f  https://${jiangJade}@github.com/jiangJade/jade-blog master:gh-pages

cd -
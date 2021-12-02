---
title: git基础
date: 2020-03-2
tags:
  - gitStudy
categories:
  - gitStudy
---

## 1 配置 git 用户名和邮箱

git config --global user.name
git config --global user.email

git config list 查看所有

## 2 初始化

git init

## 3 git 三个区

1 工作区 2 暂存区 3 版本库

工作区-->到暂存区-->版本库

暂存区是为了安全，缓冲作用保存工作区和版本库

## 4 git log

git log 的版本号只用前 8 位就行

## 5 git diff

默认比较的是工作区和暂存区

## 6 暂存区和历史区比较

git diff --cached

## 7 工作区和版本库

git diff master

## 8 代码恢复

先从暂存区找，没有就去版本库找

## 9.2 仅删除暂存区

git rm --cached "文件名"

## 10 恢复

### 10.1 恢复某个版本文件

git checkout commit_id filename 某个文件

### 10.2

git reset --hard 'commit_id' 硬恢复

### 10.3

git reflog 查看历史版本

恢复到某个版本
git reset --hard 'commit_id'

## 11 分支管理

### 11.1 创建分支

git branch 查看分支 git branch dev 创建分支
git checkout dev 切换分支

git checkout -b dev 一部到位 （-b： branch)

git branch -d feat_jiang 删除

head 头指向谁就表示提交给谁

### 11.2 合并分支

git checkout dev
git merge feat_jiang (fast)最快的方式

### 11.3 查看历史记录

git log --oneline（一行） --graph(显示图谱)

git log --oneline（一行） --graph(显示图谱)--decorate(显示分支)

## 12 暂存

git add .
git stash

### 12.1 恢复

git stash list 查看
git stash apply 恢复第一个

git stash apply 加暂存 id （恢复某一个）

git stash pop 会恢复并删除当前暂存

git clean stash 清除所有暂存

## 13 rebase（合成一条线）

有两个分支 feat_a;是从 master 切出来的

将分支 feat_a 合到 master 使用
git checkout master
git merge rebase dev 这样合并记录就是一条线

git log --oneline --graph 查看

## 14 cherry-pick(合并某个分支的某次提交记录)

cherry-pick(精选)
git cherry-pick '某个分支的某个 commit_id'

可以新建一个分支 然后合这个 commit_id

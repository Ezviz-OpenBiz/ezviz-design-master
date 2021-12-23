---
order: 12
title: Contributing
toc: false
---

## 背景
​
这篇指南，主要是教导你如何为 EZ Design 贡献一份自己的力量。

## 透明开发
​
我们所有的工作都会放在 GitHub上。不管是核心团队成员还是外部贡献者的 pull request 都需要经过同样流程的 review。

## 分支管理
​
我们长期维护一个分支 master，不管是修复 bug，还是新功能开发都发 pull request 到 master，我们采用周版本的流程，每周发一个版本修复问题和迭代功能，大版本和紧急 bug 不走周版本流程。

## Pull Request
​
目前 EZ Design 由智居业务部前端研发团队负责，如果你想参与组件库的研发，请按照下面的步骤参与：

1. 基于 master 分支，切换自己的分支进行操作。
2. 在项目根目标运行 npm install，如果不成功，可以切换 npm 源。
3. 如果确认你修复了一个 bug 或者新增了一个功能，请确保写了相应的测试。
4. 确认所有的测试都是通过 npm run test，开发过程中可以用 npm run test -- --watch TestName 来运行指定的测试。
5. 运行 npm run test -- u 来更新 jest snapshot 并且把这些更新也提交上来。
6. 确保你的代码通过了 lint 检查 npm run lint。
7. 提交代码，并且 pull request。

## 开发流程
​
在 clone了 ezd 的代码并且使用 npm install 安装完依赖后，你还可以运行下面几个常用的命令：

1. npm run start 在本地运行 ezd 的网站。
2. npm run lint 检查代码风格。
3. npm run test 运行测试。
4. npm run compile 编辑 TypeScript 代码到 lib 和 es 目录。
5. npm run dist 构建 ezd 的 umd 版本到 dist 目录。

## 加入我们
​
请联系 xiongxinlaing5，申请成为仓库的协作开发者。
​

​



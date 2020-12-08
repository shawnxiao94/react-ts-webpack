<!-- @format -->

React + Typescript 项目模板

> 目前 webpack5 版本热更新失效，--open 自动打开浏览器失效
> 兼容版本 (实质还是走的 webpack4)

新版 webpack5 或者 webpack-cli 与相关协作的功能包并不兼容
兼容如下:

```
"webpack": "^5.10.0",
"webpack-cli": "3.3.12",
"webpack-dev-server": "^3.11.0"
```

git commit 提交的时候报错 husky > pre-commit hook failed (add --no-verify to bypass)（解决办法）

> 将 git commit -m "XXX" 改为 git commit --no-verify -m "XXX",暂时先提交

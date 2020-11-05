# Mobx入门学习项目

### 项目环境

create-react-app初始化

babel 7.x

mobx 6.x

mobx-react 7.x

react 17.x

### 项目运行

```
npm start
```

 [http://localhost:3000](http://localhost:3000)

### 学习中遇到的问题

- store更新但是UI没有更新

  原因是mobx 6.x版本不是使用`@observable`，改成使用`makeAutoObservable`或者`makeObservable`

- Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state

  react中事件绑定函数传参(此函数触发了更新store)，没有使用箭头函数或者`bind`

  PS：太久没用react，忘记这个点了

- 定义和使用computed

  定义：需要函数前面加get

  使用：不是函数调用，直接获取属性

### 项目中涉及知识点

- store创建和使用
- store的多模块
- makeAutoObservable使用
- makeObservable使用
- 异步action（模拟，没使用mock）
- computed
- 装饰器的babel配置

### 说明

本项目写的比较粗糙，只适合mobx的入门学习，如有疑问，欢迎交流
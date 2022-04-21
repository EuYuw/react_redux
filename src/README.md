## react-redux

react 团队出的 redux

react-redux 库有 2 个组件概念：
容器组件：容器组件包裹 UI 组件，容器组件里可随意调用 redux 的 API，通过 props 传递 1. redux 中保存的状态 2. 操作状态的方法
UI 组件： UI 组件不能调用任何 redux 的 API

相比于 redux 的优势：

1. 无需监听 store 的变化，容易组件内部处理
2. 无需为每个容器组件传递 store，将 store 传递给 Provider 组件即可解决

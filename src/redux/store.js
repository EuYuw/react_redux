/**
 * store暴露文件 整个应用只有一个store
 */
// 引入创建store的核心方法
import { createStore, applyMiddleware } from "redux";
// 引入为count服务的reducer文件
import count_reducer from "./count_reducer";
// 引入中间件
import thunk from "redux-thunk";

export default createStore(count_reducer, applyMiddleware(thunk));

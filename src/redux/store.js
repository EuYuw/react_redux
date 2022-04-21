/**
 * store暴露文件 整个应用只有一个store
 */
// 引入创建store的核心方法
import { createStore, applyMiddleware } from "redux";
// 引入中间件
import thunk from "redux-thunk";
// 引入整合的reducers
import reducers from './reducers';

export default createStore(reducers, applyMiddleware(thunk));

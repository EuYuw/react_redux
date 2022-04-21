/**
 * store暴露文件 整个应用只有一个store
 */
// 引入创建store的核心方法
import { createStore, applyMiddleware, combineReducers } from "redux";
// 引入为Count服务的reducer文件
import countReducer from "./reducers/count";
// 引入为Person服务的reducer文件
import personReducer from "./reducers/person";
// 引入中间件
import thunk from "redux-thunk";

// 整合reducers
const reducersCollection = combineReducers({
  count: countReducer,
  personList: personReducer,
}); // combineReducers方法里的对象是怎样，则整合出的state就是什么样

export default createStore(reducersCollection, applyMiddleware(thunk));

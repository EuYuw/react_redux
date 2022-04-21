/**
 * 整合reducers
 */
// 引入为Count服务的reducer文件
import countReducer from "./count";
// 引入为Person服务的reducer文件
import personReducer from "./person";
import {  combineReducers } from "redux";

export default combineReducers({
  count: countReducer,
  personList: personReducer,
}); // combineReducers方法里的对象是怎样，则整合出的state就是什么样
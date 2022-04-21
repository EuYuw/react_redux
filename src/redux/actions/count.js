/**
 * 该文件为Count组件生产action对象
 */

import { INCREMENT, DECREMENT } from "../constant";

export const createIncrementAction = (data) => ({ type: INCREMENT, data }); // 一般action 为 object
export const createDecrementAction = (data) => ({ type: DECREMENT, data });
export const createIncrementAsyncAction = (data, time) => {
  // 异步action 为 function
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};

/**
 * 为Person组件服务的reducer，reducer本质是一个函数
 * reducer会接收到两个参数，分别为：之前的状态 preState，动作对象 action
 */
import { ADD_PERSON } from "../constant";

const initState = [{ id: "00001", name: "WY", age: "22" }];
const personReducer = (preState = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
};

export default personReducer;

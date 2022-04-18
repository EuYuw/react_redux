/**
 * 为count组件服务的reducer，reducer本质是一个函数
 * reducer会接收到两个参数，分别为：之前的状态 preState，动作对象 action
 */
import { INCREMENT, DECREMENT } from "./constant";

// 指示当前reducer的默认值
const initState = 0;
export default function countReducer(preState = initState, action) {
  // 从action对象中获取type，data
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}

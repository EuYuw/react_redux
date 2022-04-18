import React, { Component } from "react";
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

export default class Count extends Component {
  doIncrement = () => {
    const { value } = this.numberNode;
    store.dispatch(createIncrementAction(value * 1));
  };

  doDecrement = () => {
    const { value } = this.numberNode;
    store.dispatch(createDecrementAction(value * 1));
  };

  doDecrementAsync = () => {
    const { value } = this.numberNode;
    store.dispatch(createIncrementAsyncAction(value * 1, 600));
  };

  // 注册监听
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    return (
      <div>
        <h2>当前和为: {store.getState()}</h2>
        <div>
          <select
            ref={(n) => {
              this.numberNode = n;
            }}
            style={{ width: "50px" }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button style={{ marginLeft: "10px" }} onClick={this.doIncrement}>
            +
          </button>
          <button style={{ marginLeft: "10px" }} onClick={this.doDecrement}>
            -
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={this.doDecrementAsync}
          >
            异步加
          </button>
        </div>
      </div>
    );
  }
}

/**
 * 容器组件Count UI组件Count整合文件
 * 通过react-redux提供的connect方法生成容器组件
 */

import { Component } from "react";
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";

// UI组件
class CountUI extends Component {
  doIncrement = () => {
    const { value } = this.numberNode;
    this.props.inCrement(value * 1);
  };

  doDecrement = () => {
    const { value } = this.numberNode;
    this.props.deCrement(value * 1);
  };

  doDecrementAsync = () => {
    const { value } = this.numberNode;
    this.props.inCrementAsync(value * 1, 600);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Count组件</h2>
        <h4>当前和为: {this.props.count}</h4>
        <h4>Person组件人员数量为: {this.props.personLength}</h4>
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

/**
 * react-redux connet生成容器组件标准写法
 * 
    // 映射store的state，将函数的一般对象返回值通过props传递给UI组件
    const mapStateToProps = (state) => ({ count: state });
    // 映射操作store的方法（action），函数的返回值是key，value(function)的键值对
    const mapActionToProps = (dispatch) => ({
      inCrement: (data) => {
        dispatch(createIncrementAction(data));
      },
      deCrement: (data) => {
        dispatch(createDecrementAction(data));
      },
      inCrementAsync: (data, time) => {
        dispatch(createIncrementAsyncAction(data, time));
      },
    });
    export default connect(mapStateToProps, mapActionToProps)(CountUI);
 */

/**
 * react-redux connet生成容器组件简化写法
 */
export default connect(
  (state) => ({ count: state.count, personLength: state.personList.length }),
  {
    inCrement: createIncrementAction, // UI组件调用时，相当于调用的创建一般action的方法，action返回后reac-redux自动dispatch，API层的优化
    deCrement: createDecrementAction,
    inCrementAsync: createIncrementAsyncAction,
  }
)(CountUI);

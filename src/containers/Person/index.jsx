import React, { Component } from "react";
import { connect } from "react-redux";
import { createPersonAddAction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    this.props.addPerson({
      id: +new Date(), // 可使用nanoid库
      name: this.nameNode.value,
      age: this.ageNode.value,
    });
    this.nameNode.value = "";
    this.ageNode.value = "";
  };

  render() {
    return (
      <div>
        <h2>Person组件</h2>
        <h4>Count组件当前和为: {this.props.count}</h4>
        <input
          type="text"
          ref={(c) => (this.nameNode = c)}
          placeholder="输入姓名"
        />
        <input
          type="text"
          ref={(c) => (this.ageNode = c)}
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <h4>Person列表</h4>
        {this.props.personList.map((item) => {
          return (
            <div key={item.id}>
              {item.name} --- {item.age}
            </div>
          );
        })}
      </div>
    );
  }
}

// 第一个参数 映射state到UI组件的props
export default connect(
  (state) => ({ personList: state.personList, count: state.count }),
  {
    addPerson: createPersonAddAction,
  }
)(Person);

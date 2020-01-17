import React from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

export default class App extends React.Component {
  state = {
    list1: [],
    list2: []
  };
  callBackPushFunction = childData => {
    this.setState({
      list1: this.state.list1.concat(childData)
    });
    console.log("added");
  };
  callBackDoneFunction = childData => {
    const taskDone = {
      task: childData,
      status: true
    };
    this.setState({
      list2: this.state.list2.concat(taskDone)
    });
  };
  render() {
    return (
      <div>
        {/* just for testing {this.state.list1.length} */}
        <AddTask parentCallBack={this.callBackPushFunction} />
        <TaskList
          list1={this.state.list1}
          list2={this.state.list2}
          parentCallBack={this.callBackDoneFunction}
        />
        {/* just for testing {this.state.list2.length} */}
      </div>
    );
  }
}

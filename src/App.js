import React from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import Appbar from "./Components/Appbar";

export default class App extends React.Component {
  state = {
    list1: [],
    list2: []
  };
  callBackPushFunction = childData => {
    this.setState({
      list1: this.state.list1.concat(childData)
    });
    // console.log("added");
  };
  callBackDoneFunction = childData => {
    console.log("task done: " + childData);
    for (var i = 0; i < this.state.list1.length; i++) {
      if (this.state.list1[i].task === childData) {
        let duplicate_list = this.state.list1;
        duplicate_list.splice(i, 1);
        this.setState({
          list1: duplicate_list
        });
      }
    }
    const taskDone = {
      task: childData,
      status: true
    };
    this.setState({
      list2: this.state.list2.concat(taskDone)
    });
  };
  callBackUnDoneFunction = childData => {
    console.log("task undone: " + childData);
    for (var i = 0; i < this.state.list2.length; i++) {
      if (this.state.list2[i].task === childData) {
        let duplicate_list = this.state.list2;
        duplicate_list.splice(i, 1);
        this.setState({
          list2: duplicate_list
        });
      }
    }
    const taskUndone = {
      task: childData,
      status: false
    };
    this.setState({
      list1: this.state.list1.concat(taskUndone)
    });
  };
  clearLists = () => {
    this.setState({
      list1: [],
      list2: []
    });
  };
  render() {
    return (
      <div>
        <Appbar />
        <div class="container">
          <AddTask parentCallBack={this.callBackPushFunction} />
          {this.state.list1.length === 0 && this.state.list2.length === 0 ? (
            <h3>Add something</h3>
          ) : (
            <TaskList
              list1={this.state.list1}
              list2={this.state.list2}
              parentCallBack={this.callBackDoneFunction}
              parentCallBack2={this.callBackUnDoneFunction}
            />
          )}
        </div>
      </div>
    );
  }
}

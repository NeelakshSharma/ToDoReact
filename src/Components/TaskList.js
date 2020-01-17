import React from "react";

export default class TaskList extends React.Component {
  handleDone = event => {
    if (event.target.checked) {
      console.log(event.target.name);
      //got the name of task as event.target.name
      this.props.parentCallBack(event.target.name);
    }
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.list1.map(taskItem => (
            <li>
              <label>
                <input
                  type="checkbox"
                  name={taskItem.task}
                  onChange={this.handleDone}
                />
                {taskItem.task}
              </label>
            </li>
          ))}
        </ul>
        <ul>
          {this.props.list2.map(taskItem => (
            <li>
              <label>
                <input
                  type="checkbox"
                  name={taskItem.task}
                  onChange={this.handleNotDone}
                />
                {taskItem.task}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

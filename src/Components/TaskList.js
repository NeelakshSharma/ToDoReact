import React from "react";
import { Paper } from "@material-ui/core";
export default class TaskList extends React.Component {
  handleDone = event => {
    if (event.target.checked) {
      //got the name of task as event.target.name
      this.props.parentCallBack(event.target.name);
    }
  };
  handleNotDone = event => {
    console.log(event.target.name);
    this.props.parentCallBack2(event.target.name);
  };
  render() {
    const list1 = this.props.list1;
    const list2 = this.props.list2;
    const tasksPendingList = (
      <ul style={{ listStyleType: "none" }}>
        {list1.map(taskItem => (
          <Paper
            style={{
              width: "65%",
              padding: "15px",
              marginBottom: "5px"
            }}
          >
            <li>
              <label>
                <input
                  type="checkbox"
                  name={taskItem.task}
                  onChange={this.handleDone}
                  checked={taskItem.status}
                />
                {taskItem.task}
              </label>
            </li>
          </Paper>
        ))}
      </ul>
    );
    const tasksDoneList = (
      <ul style={{ listStyleType: "none" }}>
        {list2.map(taskItem => (
          <Paper style={{ width: "65%", padding: "15px", marginBottom: "5px" }}>
            <li>
              <label>
                <input
                  type="checkbox"
                  name={taskItem.task}
                  onChange={this.handleNotDone}
                  checked={taskItem.status}
                />
                {taskItem.task}
              </label>
            </li>
          </Paper>
        ))}
      </ul>
    );
    if (list1.length !== 0) {
      if (list2.length === 0) {
        return (
          <div>
            <h3>Finish these tasks and continue adding more.</h3>
            {tasksPendingList}
          </div>
        );
      } else {
        return (
          <div>
            <h3>Tasks Pending</h3>
            {tasksPendingList}
            <h3>Tasks completed</h3>
            {tasksDoneList}
          </div>
        );
      }
    }
    return (
      <div>
        <h2>You're good to go.</h2>
        {tasksDoneList}
      </div>
    );
  }
}

import React from "react";
import { Paper, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert severity="success" variant="filled" {...props} />;
}
function AlertRemoval(props) {
  return <MuiAlert severity="warning" variant="filled" {...props} />;
}
export default class TaskList extends React.Component {
  state = {
    open: false,
    openRemoval: false
  };
  handleClose = () => {
    this.setState({
      open: false,
      openRemoval: false
    });
  };
  handleDone = event => {
    this.setState({
      open: true
    });
    if (event.target.checked) {
      this.props.parentCallBack(event.target.name);
    }
  };
  handleNotDone = event => {
    this.setState({
      openRemoval: true
    });
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
              marginBottom: "8px"
            }}
            elevation={5}
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
          <Paper
            style={{
              width: "65%",
              padding: "15px",
              marginBottom: "5px",
              background: "#bbeccd"
            }}
          >
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
    const TaskDoneRemovalSnackBar = (
      <Snackbar
        open={this.state.openRemoval}
        autoHideDuration={2000}
        onClose={this.handleClose}
      >
        <AlertRemoval>Task removed from Completed tasks list.</AlertRemoval>
      </Snackbar>
    );
    if (list1.length !== 0) {
      if (list2.length === 0) {
        return (
          <div>
            <h3>Finish these tasks and continue adding more.</h3>
            {tasksPendingList}
            {TaskDoneRemovalSnackBar}
          </div>
        );
      } else {
        const TaskDoneSnackBar = (
          <Snackbar
            open={this.state.open}
            autoHideDuration={2000}
            onClose={this.handleClose}
          >
            <Alert>Task Completion Success!</Alert>
          </Snackbar>
        );

        return (
          <div>
            <h3>Tasks Pending</h3>
            {tasksPendingList}
            <h3>Tasks completed</h3>
            {tasksDoneList}
            {TaskDoneSnackBar}
            {TaskDoneRemovalSnackBar}
          </div>
        );
      }
    }
    const AllTasksDoneSnackBar = (
      <Snackbar
        open={this.state.open}
        autoHideDuration={2000}
        onClose={this.handleClose}
      >
        <Alert>All tasks done!</Alert>
      </Snackbar>
    );

    return (
      <div>
        <h2>You're good to go.</h2>
        {tasksDoneList}
        {AllTasksDoneSnackBar}
        {TaskDoneRemovalSnackBar}
      </div>
    );
  }
}

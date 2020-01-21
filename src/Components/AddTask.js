import React from "react";
import { Button, TextField, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Add } from "@material-ui/icons";

function Alert(props) {
  return <MuiAlert severity="info" variant="filled" {...props} />;
}

export default class AddTask extends React.Component {
  addTaskForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          onChange={this.handleChange}
          value={this.state.task}
          variant="outlined"
          label="Add task here"
          style={{ marginRight: "30px", width: "75%" }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ height: "55px" }}
        >
          {<Add style={{ paddingRight: "5px" }} />}
          Add task
        </Button>
      </form>
    );
  }
  taskAdditionSnackbar() {
    return (
      <Snackbar
        open={this.state.open}
        autoHideDuration={2000}
        onClose={this.handleClose}
      >
        <Alert>Task Added!</Alert>
      </Snackbar>
    );
  }
  state = {
    task: "",
    open: false
  };
  handleSubmit = event => {
    if (this.state.task) {
      let task = {
        task: this.state.task,
        status: false
      };
      this.props.parentCallBack(task);
      this.setState({
        task: "",
        open: true
      });
      event.preventDefault();
    }
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  handleChange = event => {
    this.setState({
      task: event.target.value
    });
  };
  render() {
    return (
      <>
        {this.addTaskForm()}
        {this.taskAdditionSnackbar()}
      </>
    );
  }
}

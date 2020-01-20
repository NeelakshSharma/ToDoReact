import React from "react";
import { Button, TextField, Box, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert severity="info" variant="filled" {...props} />;
}

export default class AddTask extends React.Component {
  state = {
    task: "",
    open: false
  };
  handleClick = () => {
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
      <div>
        <Box>
          <TextField
            onChange={this.handleChange}
            value={this.state.task}
            variant="outlined"
            label="Add task here"
            style={{ marginRight: "5px" }}
          />
          <Button variant="outlined" color="primary" onClick={this.handleClick}>
            Add task
          </Button>
        </Box>
        <Snackbar
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
        >
          <Alert>Task Added!</Alert>
        </Snackbar>
      </div>
    );
  }
}

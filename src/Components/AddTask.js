import React from "react";
import { Button, TextField, Box } from "@material-ui/core";

export default class AddTask extends React.Component {
  state = {
    task: ""
  };
  handleClick = () => {
    if (this.state.task) {
      let task = {
        task: this.state.task,
        status: false
      };
      this.props.parentCallBack(task);
      this.setState({
        task: ""
      });
    }
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
      </div>
    );
  }
}

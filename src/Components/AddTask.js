import React from "react";

export default class AddTask extends React.Component {
  state = {
    task: ""
  };
  handleClick = () => {
    let task = {
      task: this.state.task,
      status: false
    };
    this.props.parentCallBack(task);
    this.setState({
      task: ""
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
        {/* {this.props.count} */}
        <input onChange={this.handleChange} value={this.state.task} />
        <button onClick={this.handleClick}>Add task</button>
        {/* {this.state.task} */}
      </div>
    );
  }
}

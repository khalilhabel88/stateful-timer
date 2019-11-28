import React, { Component } from "react";
import Timer from "./Time";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 55000,
      clock: false
    };
    setInterval(() => {
      if (this.state.clock)
        this.setState({
          timer: this.state.timer + 1000
        });
    }, 1000);
  }
  start = () => {
    this.setState({ clock: !this.state.clock });
  };
  reset = () => {
    this.setState({
      timer: 0,
      clock: false
    });
  };
  render() {
    return (
      <div>
        <div className="pop">
          <Timer t={this.state.timer} />
          <div>
            <span>Hour</span>
            <span>Minute</span>
            <span>Second</span>
          </div>
          <div>
            <button onClick={this.start}>
              {this.state.clock ? "Stop" : "Start"}
            </button>
            <button onClick={this.reset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Time;

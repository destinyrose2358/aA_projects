import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.ticker = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }
 
  tick() {
    this.setState({time: new Date()});
  }

  render() {
    let { time } = this.state;
    return <div className="clock">
      <p>{time.toLocaleTimeString()}</p>
      <h4>Clocky McClock-Face</h4>
    </div>
  }
}
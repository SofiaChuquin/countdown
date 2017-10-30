import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    this.addZero = this.addZero.bind(this);
  }

  componentWillMount() {
    this.getTimeUntil((this.props.deadline));
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  addZero(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({ days, hours, minutes, seconds})
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className='app__date'>
        <div className='app__date__item'>{this.addZero(days)} days</div>
        <div className='app__date__item'>{this.addZero(hours)} hours</div>
        <div className='app__date__item'>{this.addZero(minutes)} minutes</div>
        <div className='app__date__item'>{this.addZero(seconds)} seconds</div>
      </div>
    );
  }
}

export default Clock;

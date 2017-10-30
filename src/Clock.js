import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className='app__date'>
        <div className='app__date__item'>{days} days</div>
        <div className='app__date__item'>{hours} hours</div>
        <div className='app__date__item'>{minutes} minutes</div>
        <div className='app__date__item'>{seconds} seconds</div>
      </div>
    );
  }
}

export default Clock;

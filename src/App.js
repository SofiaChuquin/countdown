import React, { Component } from 'react';
import './App.css';
import Clock from './Clock'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: 'October 31, 2017', newDeadline: '' }
  }

  changeDeadline() {
    const { newDeadline } = this.state;
    this.setState({ deadline: newDeadline })
  }

  render() {
    return (
      <div className='app'>
        <div className='app__title'>Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <div>
          <input
            placeholder='new date'
            onChange={e => this.setState({ newDeadline: e.target.value })}
          />
          <button type='button' onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;

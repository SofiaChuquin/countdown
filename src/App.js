import React, { Component } from 'react';
import './App.css';

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
        <div className='app__date'>
          <div className='app__date__item'>14 days</div>
          <div className='app__date__item'>30 hours</div>
          <div className='app__date__item'>15 minutes</div>
          <div className='app__date__item'>20 seconds</div>
        </div>
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

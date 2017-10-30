import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app__title'>Countdown to October 31, 2017</div>
        <div className='app__date'>
          <div className='app__date__item'>14 days</div>
          <div className='app__date__item'>30 hours</div>
          <div className='app__date__item'>15 minutes</div>
          <div className='app__date__item'>20 seconds</div>
        </div>
        <div>
          <input placeholder='new date' />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;

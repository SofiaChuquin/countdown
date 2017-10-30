import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
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
        <Form inline>
          <FormControl
            className='app__input'
            placeholder='New date: Month day, year'
            onChange={e => this.setState({ newDeadline: e.target.value })}
          />
          <Button type='button' onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;

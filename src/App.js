import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button, Alert } from 'react-bootstrap';
import Clock from './Clock'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: 'October 31, 2100', newDeadline: '', alertVisible: false };
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  changeDeadline() {
    const { newDeadline, deadline } = this.state;
    if (Date.parse(new Date()) > Date.parse(newDeadline)) {
      this.setState({ alertVisible: true, deadline });
    } else {
      this.setState({ deadline: newDeadline });
    }
  }

  handleAlertDismiss() {
    this.setState({ alertVisible: false });
  }

  render() {
    return (
      <div className='app'>
        <div className='app__title'>Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl
            type='text'
            className='app__input'
            placeholder='New date: Month day, year'
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                this.changeDeadline();
              }
            }}
            onChange={e => this.setState({ newDeadline: e.target.value })}
          />
          <Button type='button' onClick={() => this.changeDeadline()}>Submit</Button>
          {this.state.alertVisible ? <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
            <h4>Oh snap!</h4>
            <p>Introduce a date higher than today.</p>
            <p>
              <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
            </p>
          </Alert> : null}
        </Form>
      </div>
    );
  }
}

export default App;

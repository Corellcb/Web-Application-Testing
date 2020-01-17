import React from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0
    }
  }

  addStrikes = () => {
    if(this.state.strikes < 3) {
      let newStrikes = this.state.strikes + 1;
      this.setState({strikes: newStrikes});
    } else {
      this.setState({
        strikes: 0,
        balls: 0,
        fouls: 0
      });
    }
  }

  addFouls = () => {
    if(this.state.fouls < 3) {
      let newFouls = this.state.fouls + 1;
      this.setState({fouls: newFouls});
    } else {
      this.setState({fouls: 0});
    }
  }

  addBalls = () => {
    if(this.state.balls < 3) {
      let newBalls = this.state.balls + 1;
      this.setState({balls: newBalls});
    } else {
      this.setState({balls: 0});
    }
  }

  reset = () => {
    this.setState({
      strikes: 0,
      fouls: 0,
      balls: 0
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Baseball Scoreboard</h1>
        <Display fouls={this.state.fouls} strikes={this.state.strikes} balls={this.state.balls} />
        <Dashboard reset={this.reset} addStrikes={this.addStrikes} addFouls={this.addFouls} addBalls={this.addBalls} />
      </div>
    );
  }
}

export default App;

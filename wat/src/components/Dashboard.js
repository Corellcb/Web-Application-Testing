import React, { Component } from 'react';

class Dashboard extends Component {
    constructor() {
        super();
        
    }

    

    render() {
        return (
            <div>
                <button onClick={this.props.addStrikes} >Strikes</button>
                <button onClick={this.props.addFouls} >Fouls</button>
                <button onClick={this.props.addBalls} >Balls</button>
                <button onClick={this.props.reset} >Reset</button>
            </div>
        )
    }
}

export default Dashboard;
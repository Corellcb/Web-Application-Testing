import React from 'react';

const Display = props => {
    return (
        <div>
            <div>
                <h3>Strikes</h3>
                <p>{props.strikes}</p>
            </div>
            
            <div>
                <h3>Fouls</h3>
                <p>{props.fouls}</p>
            </div>
            
            <div>
                <h3>Balls</h3>
                <p>{props.balls}</p>
            </div>
        </div>
    )
}

export default Display;
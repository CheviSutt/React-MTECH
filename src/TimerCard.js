import React, { Component } from 'react';
import { render } from 'react-dom';
import CountUp, { startAnimation } from 'react-countup';

class TimerCard extends Component {
    render(){
        return(
            <div class="tForm">
                <h1>Mow the yard</h1>
                <h3>House Chores</h3>
                {/*<p>01:05.45</p>*/}
                <CountUp className="CountUp" start={0} end={100} duration={3} ref={(countUp) => {
                    this.myCountUp = countUp;
                }} />
                <p className='formBtn'>
                    <button className="Button" onClick={(event) => {
                        startAnimation(this.myCountUp);
                    }}>Start</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </p>
            </div>
        )
    }
}

export default TimerCard
import React, { Component } from 'react';
import TimerForm from './TimerForm'
import TimerCard from "./TimerCard";

class ToggableTimer extends Component {
    // state = {
    //     timers: [
    //         {
    //             title: 'Practice squat',
    //             project: 'Gym chores',
    //             id: Math.floor(Math.random() * 1000000),
    //             elapsed: 5456099,
    //             runningSince: Date.now(),
    //         },
    //         {
    //             title: 'Bake Squash',
    //             project: 'Kitchen chores',
    //             id: Math.floor(Math.random() * 1000000),
    //             elapsed: 1273998,
    //             runningSince: null,
    //         }
    //     ]
    // }
    render(){
        return (
            <div className='tTimer'>
                <TimerCard/><br/>
                <TimerForm/>
                {/*<TimerForm timers={this.state.timers}*/}
            </div>
        )
    }
}

export default ToggableTimer
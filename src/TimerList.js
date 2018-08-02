import React, { Component } from 'react';
import ToggableTimer from './ToggableTimer';
import AddTimer from "./AddTimer";

class TimerList extends Component {
    render() {
        return (
        <div className='tList'>
            <ToggableTimer/><br/>
            <AddTimer/>
        </div>
        )
    }
}

export default TimerList
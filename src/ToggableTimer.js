import React, { Component } from 'react';
import TimerForm from './TimerForm'
import TimerCard from "./TimerCard";

class ToggableTimer extends Component {
    render(){
        return (
            <div className='tTimer'>
                <TimerCard/><br/>
                <TimerForm/>
            </div>
        )
    }
}

export default ToggableTimer
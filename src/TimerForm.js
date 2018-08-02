import React, { Component } from 'react';
import './App.css'

class TimerForm extends Component {
    render(){
        return(
            <div className='tForm'>
                <h1>Mow the yard</h1>
                <input type="text" name="title"/>
                <h3>House Chores</h3>
                <input type="text" name="project"/>
            </div>
        )
    }
}

export default TimerForm
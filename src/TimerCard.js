import React, { Component } from 'react';

class TimerCard extends Component {
    render(){
        return(
            <div class="tForm">
                <h1>Mow the yard</h1>
                <h3>House Chores</h3>
                <p>01:05.45</p>
                <p className='formBtn'>
                    <button>Start</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </p>
            </div>
        )
    }
}

export default TimerCard
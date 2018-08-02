import React, { Component } from 'react';
import './App.css'
import ToggableTimer from './ToggableTimer'

class TimerForm extends Component {
    state = {
        timers: [
            {
                title: '',
                project: '',
            }
        ]
    };
    render() {
        return(
            <div className='tForm'>
                <h1>Title:{this.state.title}</h1>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                {/*<textarea value={this.state.title} name='title' onChange={this.handleChange}></textarea>*/}
                <h3>Project:{this.state.project}</h3>
                <input type="text" name="project" value={this.state.project} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = (e) => {
        console.log(e.target.value);
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log(this.state);
    }
}

export default TimerForm
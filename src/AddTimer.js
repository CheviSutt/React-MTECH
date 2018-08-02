import React, { Component } from 'react';
import TimerForm from "./TimerForm";

class AddTimer extends Component {

    render() {
        return (
            <button onClick={this.newForm}>+</button>
        )
    }

    newForm(){
        return <TimerForm/>,
        console.log("yo");
        // yoreturn (
        //     render(
        //         <TimerForm/>
        //     )
        //
        // )
    }
}

export default AddTimer
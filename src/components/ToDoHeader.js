import React from 'react';

class ToDoHeader extends React.Component{
    render(){
        const todoHeader ={
            color:'orange',
            letterSpacing:'2px'
        };
        const custStyle = {
            marginTop: '9%'
        };
        return(
            <div style={custStyle}>
                <h2 style={todoHeader}>Your Hero's <big>&#x2623;</big></h2>
            </div>
        )
    }
}

export default ToDoHeader;
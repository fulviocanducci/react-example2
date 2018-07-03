import React, { Component } from 'react';

class MyButton extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <button onClick={() => {this.props.handleClick(this.props.label)}}>
                { this.props.label }
                </button>
            </div>
        );
    }
}

export default MyButton;
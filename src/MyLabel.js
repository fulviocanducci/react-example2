import React, { Component } from 'react';

class MyLabel extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <p>{ this.props.text }</p>
            </div>
        );
    }
}

export default MyLabel;
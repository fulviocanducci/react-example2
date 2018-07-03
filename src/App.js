import React, { Component } from 'react';
import './App.css';
import MyButton from './MyButton';
import MyLabel from './MyLabel';

class App extends Component {  
    constructor(props){
        super(props);

        this.state = {
            labelText: 'Escolhe um botão ...'
        };
        
        this.setLabelText = this.setLabelText.bind(this);
    }  

    setLabelText(labelText){        
        this.setState({labelText: labelText});
    }
    

    render(){
        console.log(this.state);
        return ( 
            <div>                 
                <MyLabel text={this.state.labelText} />
                <MyButton handleClick={this.setLabelText} label="Text 1" />
                <MyButton handleClick={this.setLabelText} label="Text 2" />
            </div>
        );
    }
}

export default App;

//https://www.youtube.com/watch?v=WPYI2CcRX7c
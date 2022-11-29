import React from 'react';

class Random extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Randint: Math.floor(Math.random() * 1000) + 1
        } 
    }
    
    render(){
       return(
            <div>
                <h1>Random number: {this.state.Randint}</h1>
            </div>
        ); 
    }
};

export default Random;
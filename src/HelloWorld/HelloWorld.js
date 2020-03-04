import React, { Component } from 'react';

export default class HelloWorld extends Component {
    state = {
        who: 'world',
    }

    render(){
        return(
            <div HelloWorld='HelloWorld'>
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.setState({who: 'World'})}>World</button>
                <button onClick={() => this.setState({who: 'Friend'})}>Friend</button>
                <button onClick={() => this.setState({who: 'React'})}>React</button>
            </div>
        )
    }
}


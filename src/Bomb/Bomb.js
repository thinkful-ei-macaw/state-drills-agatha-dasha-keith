import React from 'react';

export default class Bomb extends React.Component{
    state = {
        count: 0,
    }

    componentDidMount(){
        this.interval = setInterval(() => this.setState({count: this.state.count+1}),
        1000
        );
    }

    countDown(){
        if(this.state.count % 8 === 0){
            return 'BOOM!'
        }
        else if(this.state.count % 2 === 0){
            return 'tick'
        }
        else{
            return 'tock'
        }
    }

    render(){
        return(
            <div className='Bomb'>
                <p>{this.countDown()}</p>
            </div>
        )
    }
}
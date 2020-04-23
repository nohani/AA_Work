import React from "react";


const clockHeader = (props) => {
    const date = props.date;
    return <h1 className="red">Clock: { date.getHours() }:{ date.getMinutes()}:{ date.getSeconds() }</h1>;
}

export default class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        date: new Date(),
        loading: true
    };
  }

  componentDidMount(){
    setTimeout( () => this.setState({loading: false}), 1000)
    const interval = setInterval(this.tick.bind(this), 1000);
    this.interval = interval;
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  tick(){
    this.setState({date: new Date()});
  }

  render(){

    return this.state.loading ? (<h1>I'm loading</h1>) : clockHeader(this.state)
  }
}
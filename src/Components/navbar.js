import React, {Component} from 'react'

export default class Navbar extends Component
{
    constructor(props)
    {
        super();

        this.state = {
            counter: 0
        }
    }

    componentDidMount(){
        console.log(`Mount: ${this.props.time}`)
    }

    componentWillReceiveProps() {
         if(this.state.counter < 10){
            console.log(`UPDATE: ${this.props.time}`)
            this.setState({
                counter: this.state.counter + 1
            })
         }
    }

    render(){
        return(
            <div className = 'navbar1'>
                <div id="apptitle">React App!</div>
                <div className="name1">Hello {this.props.name} <span id="nameSpan"></span> The time is: {this.props.time}</div>
                <img src="http://images.clipartpanda.com/ice-cream-clipart-aie45kXi4.png" className="typeimg" alt=""/>
                <input type='button' className="btn-primary" value="Go to next page" onClick={() => this.props.swapPages()}/>
            </div>
        )
    }


}
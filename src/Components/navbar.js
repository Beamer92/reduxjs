import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeTime} from '../redux/actions/main'

const mapStateToProps = (state) => {
    return {
        name: state.name,
        time: state.time
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        tick: () => dispatch(changeTime())
    }
}

class Navbar extends Component
{
    constructor(props){
        super();
    }

    componentDidMount()
    {
        setInterval(() => 
        {
            this.props.tick()
        }, 1000)
    }

    render(){
        return(
            <div className = 'navbar1'>
                <div id="apptitle">React App!</div>
                <div className="name1">Hello {this.props.name} <span id="nameSpan"></span> The time is: {this.props.time}</div>
                <img src="http://images.clipartpanda.com/ice-cream-clipart-aie45kXi4.png" className="typeimg" alt=""/>
                <input type='button' className="btn-primary" value="Go to next page" />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Navbar);
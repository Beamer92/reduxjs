import React, {Component} from 'react'
import store from '../redux/store'
import {changeName} from '../redux/actions/main'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        
    }
}


const mapDispatchToprops = (dispatch) => {
    return {
        updateName: (newName) => dispatch(changeName(newName))
    }
}


class Body extends Component{
    constructor(props)
    {
        super()

        this.state={
            formName: "",
            formColor: "",
            styles:{
                backgroundColor: "#434750"
            }
        }
    }

    changePicture()
    {
        this.props.toggleToggle();
    }

    updateStuff=(e)=>
    {
        e.preventDefault()
        this.props.updateName(this.state.formName)

        let backgroundColor = this.state.formColor.length > 0 ? this.state.formColor : this.state.styles.backgroundColor

        this.setState({
            styles: {backgroundColor},
            formName: "",
            formColor: ""
        })
    }

    update=(e)=>
    {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() 
    {
        return(
            <div className="container" style={this.state.styles}>
                <div className="d-flex flex-row">
                    <img 
                    src={
                        this.props.tog === true ? "http://31.media.tumblr.com/3a8206a9e2faa621975381f0e44c9453/tumblr_nah5b6NJcZ1qaqps8o7_r1_500.jpg" : "https://www.mypokecard.com/my/galery/v04NmcoGiW.jpg"
                    } className="mainimg" alt="Goes Here"/>
                </div>
            <div className="d-flex flex-row">
                <button id="btnpic" className="btn" onClick={() => this.changePicture()}>Change Picture</button>
            </div>
            <form className="d-flex flex-row" id="form1" onSubmit={this.updateStuff}>
                <input type="text" value={this.state.formName} onChange={this.update} name="formName" placeholder="Name Here" id="nameInput"/>
                <input type="text" value={this.state.formColor} onChange={this.update} name="formColor" placeholder="Color here" id="colorInput"/>
                <input type="submit" className="btn sub"/>
            </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Body);
import React, {Component} from 'react'

export default class TheForm extends Component{
    constructor(props){
        super()

        this.state={
            formName:"",
            formColor:""
        }
    }

updateStuff=(e)=>
    {
        e.preventDefault()
        this.props.updateFormData(this.state.formName, this.state.formColor)

        this.setState({
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

    render(){
        return(
            <form className="d-flex flex-row" id="form1" onSubmit={this.updateStuff}>
                <input type="text" value={this.state.formName} onChange={this.update} name="formName" placeholder="Name Here" id="nameInput"/>
                <input type="text" value={this.state.formColor} onChange={this.update} name="formColor" placeholder="Color here" id="colorInput"/>
                <input type="submit" className="btn sub"/>
            </form>
        )
    }
}

/* put this in Body.js
    updateFormData = (name, color) => {
        let backgroundColor = color.length > 0 ? color : this.state.styles.backgroundColor;

        this.props.updateData(name);

        this.setState({
            styles: {backgroundColor}
        })
    }

 */
import React, {Component} from 'react'

export default class Page2 extends Component{
    constructor(props){
            super()

            this.state={
                place: "",
                list:["Specialty's Cafe and Bakery","Purple Cafe and Wine Bar","Japonessa Sushi Cocina"]
            }
    }

    submit = (e) => {
        e.preventDefault()

        let newList = [...this.state.list]
        newList.push(this.state.place)
        this.setState({
            list: newList
        })
    }

    update = (e) => {
        this.setState({
            place: e.target.value
        })
    }

    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form id="form2" onSubmit={this.submit}>
                        <input id="form2Input" type="text" name="place" onChange={this.update} placeholder="New Item here"/>
                        <input type="submit"/>
                    </form>
                </div>
                <div className="col-md-6">
                    <ul id="list">
                        {
                            this.state.list.map((ele, ind) => <li className="listItem" id={`Item${ind}`} key={ind}>{ele}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
import React, {Component} from 'react'
import NavBar from './navbar'
import Body from './body'
import Footer from './footer'
import '../Style/index.css'

export default class Main extends Component
{
    constructor(props)
    {
        super()

        this.state = {
            time: new Date().toLocaleTimeString(),
            name: "The Dude",
            toggle: false,

        }
    }

    componentDidMount()
    {
        console.log(this.state.toggle)
        setInterval(() => 
        {
            this.tick()
        }, 1000)
    }

    tick() 
    {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    toggleToggle = () =>
    {   
        this.setState({
            toggle: !this.state.toggle
        })
    }

    updateData=(nameInput)=>{
        let name = nameInput.length > 0 ? nameInput : this.state.name;

        this.setState({
            name
        })
    }

    render()
    {
        return(
            <div>
                <NavBar name={this.state.name} time={this.state.time} />
                <Body toggleToggle={this.toggleToggle} tog={this.state.toggle} updateData={this.updateData}/>
                <Footer title={"React JS App"}/>
            </div>
        )
    }
}
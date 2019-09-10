import React, {Component} from 'react'
import NavBar from './navbar'
import Body from './body'
import Footer from './footer'
import Page2 from './page2'
import '../Style/index.css'

export default class Main extends Component
{
    constructor(props)
    {
        super()

        this.state = {
            time: new Date().toLocaleTimeString(),
            name: "The Dude",
            pictureToggle: false,
            page2: false
        }
    }

    componentDidMount()
    {
        console.log(this.state.pictureToggle)
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
            pictureToggle: !this.state.pictureToggle
        })
    }

    updateData=(nameInput)=>{
        let name = nameInput.length > 0 ? nameInput : this.state.name;

        this.setState({
            name
        })
    }

    updatePages = () => {
        this.setState({
            page2: !this.state.page2
        })
    }

    render()
    {
        return(
            <div>
                <NavBar name={this.state.name} time={this.state.time} swapPages={this.updatePages}/>
                {/* <Body toggleToggle={this.toggleToggle} tog={this.state.toggle} updateData={this.updateData}/> */}
                {
                    this.state.page2 === false ? 
                    <Body toggleToggle={this.toggleToggle} tog={this.state.pictureToggle} updateData={this.updateData}/> :
                    <Page2 />
                }
                <Footer title={"React JS App"}/>
            </div>
        )
    }
}
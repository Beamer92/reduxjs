import React, {Component} from 'react'
import NavBar from './navbar'
import Body from './body'
import Footer from './footer'
import '../Style/index.css'


class Main extends Component
{
    constructor(props){
        super()
    }

    render()
    {
        return(
            <div>
                <NavBar/>
                <Body/>
                <Footer title={"Redux JS App"}/>
            </div>
        )
    }
}

export default Main;
import React from 'react'

export default function Footer(props)
{
    return(
        <footer>
            <div className="footdiv">
                {props.title}
            </div>
        </footer>
    )
}
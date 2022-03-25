import React from "react";

import './header.styles.scss'

const Header = (props) =>{
    return(
        <div className="header">
            <div className="title">{props.title}</div>
        </div>
    )
}

export default Header
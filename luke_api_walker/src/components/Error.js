import React from 'react'
import obi from './obi.jpg'
import { Router, Link } from '@reach/router'


const Error = () => {
    alert("Something went wrong...")
    return(
        <div>
            <img src={obi} alt="obi_jedi"/>
            <h3>These aren't the droids you're looking for!</h3>
        
        <Link to="/">Go Back</Link> 
        </div>
    )
}

export default Error
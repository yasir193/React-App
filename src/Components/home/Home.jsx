import React, { Component } from 'react'
import "./Home.css"
import avatar from "../../img/avataaars.svg"

export default class Home extends Component {
    state = { 
        username:"yasir"
    }

    render() {
    return <>
    
    

    <div className='vh-100 d-flex justify-content-center align-items-center flex-column bg-info '>

        <img src={avatar} className='w-25' alt="jj" />

        <h1 className='mt-4 text-white hamada'>START REACT</h1>

    </div>

    
    </>
    }
}

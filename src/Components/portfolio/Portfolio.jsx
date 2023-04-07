import React, { Component } from 'react'
import "./portfolio.css"
import cabin from "../../img/cabin.png"
import cake from "../../img/cake.png"
import circus from "../../img/circus.png"
import game from "../../img/game.png"
import safe from "../../img/safe.png"
import submarine from "../../img/submarine.png"
export default class Portfolio extends Component {
    render() {
    return <>
    <h2 className='text-center headPortfolio'>Portfolio</h2>
    <div className='container'>
    <div className="row text-center">
        <div className='col-md-4 '>
        <div className='parent mb-2'>
            <img src={cabin} className='w-100 rounded me-5' alt="cabin" />
            <div className='layer w-100 position-absolute rounded d-flex justify-content-center align-items-center'>
            <i className='fa-solid fa-plus'></i>
            </div>
        </div>
        
        </div>
        <div className='col-md-4 '>
        <div className='parent mb-4'>
            <img src={cake} className='w-100 rounded me-5' alt="cake" />
            <div className='layer w-100 position-absolute rounded d-flex justify-content-center align-items-center'>
                <i className='fa-solid fa-plus'></i>
            </div>
        </div>
        </div>
        <div className='col-md-4 '>
        <div className='parent mb-2'>
            <img src={circus} className='w-100 rounded me-5' alt="circus" />
            <div className='layer w-100 position-absolute rounded d-flex justify-content-center align-items-center'>
                <i className='fa-solid fa-plus'></i>
            </div>
        </div>
        </div>
        <div className='col-md-4 '>
        <div className='parent mb-2'>
            <img src={game} className='w-100 rounded me-5' alt="game" />
            <div className='layer w-100 position-absolute rounded d-flex justify-content-center align-items-center'>
                <i className='fa-solid fa-plus'></i>
            </div>
        </div>
        </div>
        <div className='col-md-4 '>
        <div className='parent mb-2'>
            <img src={safe} className='w-100 rounded me-5' alt="safe" />
            <div className='layer w-100 position-absolute rounded d-flex justify-content-center align-items-center'>
                <i className='fa-solid fa-plus'></i>
            </div>
        </div>
        </div>
        <div className='col-md-4 '>
        <div className='parent mb-2'>
            <img src={submarine} className='w-100 rounded me-5' alt="submarine" />
            <div className='layer w-100 position-absolute rounded d-flex justify-content-center align-items-center'>
                <i className='fa-solid fa-plus'></i>
            </div>
        </div>
        </div>
        

    </div>
    </div>
    </>
        
    }
}

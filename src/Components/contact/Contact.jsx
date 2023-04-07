import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return <>
        <section>
            <h2 className='text-center text-dark'>CONTACT ME</h2>
            <div className='row'>
                <div className='col-12 d-flex flex-column justify-content-center align-items-center'>
                    <input className='w-75 mb-4' type="text " placeholder='Name'/>
                    <input className='w-75 mb-4' type="email" placeholder='email'/>
                    <input className='w-75 mb-4' type="number" placeholder='phone'/>
                    <textarea  className='w-75' name="" id="" cols="30" rows="10" placeholder='message'></textarea>
                </div>
            </div>
        </section>
        </>
    
    }
}

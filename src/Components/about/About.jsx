import React, { Component } from 'react'
import "./About.css"
export default class About extends Component {
    render() {


    return <>
    <section className='secAbout'>
        <h2 className='pt-3 fs-1 text-center'>ABOUT</h2>
        <div className='row mt-5'>

        <div className='col-md-6 d-flex justify-content-end'>
            <div className='w-50 me-5'><p className='fs-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        </div>
        <div className='col-md-6 d-flex justify-content-start'>
            <div className='w-50 ms-5'><p className='fs-4'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
        </div>

        </div>

    </section>
    </>
    
    
    }
}

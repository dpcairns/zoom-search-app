import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
    render() {
        return (
            <div className='landing'>
                <h1 className='landing-tagline'>Never miss a beat.</h1>
                <h2 className='landing-description'>Upload searchable Zoom videos and chat logs for easy reference.</h2>
                <div className='box'>
                    <button className='teacher-button'>Teacher Login</button>
                    <br />
                    <Link to='/login'><button className='student-button'>Student Login</button></Link>
                </div>
            </div>
        )
    }
}
import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div>
        <div className='top'>
            <ul className='top_button'>
                <li>Screen Reader Access</li>
                <li>|</li>
                <li>TT +A A -A</li>
                <li>|</li>
                <li>English</li>

            </ul>
        </div>
        <div className='middle'>
            <button className='DCPCR_button'>DCPCR</button>
            <button className='child_button'>Child Rights</button>
        </div>
        <div className='bottom'>
            <ul>
                <li>Home</li>
                <li>Find The Service</li>
                <li>Disability Info</li>
                <li>Essential Docs</li>
                <li>Resources</li>
                <li><input placeholder='Search for Schemes/Services'></input></li>
            </ul>
        </div>
    </div>
  )
}


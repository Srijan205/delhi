import Navbar from '../components/navbar'
import React from 'react'
import './Find_a_scheme.css'

const Find_a_scheme = () => {
  return (
    <div className='main'>
            <div className='form'>
                <div className='form_top'>
                <p>Let us help you find relevant scheme and services for you!</p>
                </div>
                <p>Date of Birth</p>
                <input placeholder='    DD/MM/YYYY'></input>
                <p>Annual Family Income (Optional)</p>
                <select name="Income" id="Income">
                    <option value="20000">0-20,000</option>
                    <option value="50000">20,000-50,000</option>
                    <option value="100000">50,000-1,00,000</option>
                    <option value="150000">1,00,000-1,50,000</option>
                </select>
                <p>Any specific category of scheme and services, you are interested in? (Optional)</p>
                <select></select>
                <p>Type of disability?</p>
                <select></select>
                <button>Search</button>
        </div>

        
    </div>
  )
}

export default Find_a_scheme
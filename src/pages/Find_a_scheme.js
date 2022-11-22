import React from 'react'
import './Find_a_scheme.css'
import Example from '../components/dropdown.js'

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
                    <option value="100000">0-1,00,000</option>
                    <option value="50000">1,00,000-2,50,000</option>
                    <option value="100000">2,50,000-3,00,000</option>
                    <option value="150000">3,00,000-6,00,000</option>
                    <option value="150000">6,00,000-10,00,000</option>
                </select>
                <p>Any specific category of scheme and services, you are interested in? (Optional)</p>
                <Example></Example>
                <p>Type of disability?</p>
                <select></select>
                <button>Search</button>
        </div>

        
    </div>
  )
}

export default Find_a_scheme
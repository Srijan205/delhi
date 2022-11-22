import React from 'react'
import '../pages/Home.css'

export const Home = () => {
  return (
    <div>
        <h1>Child Rights</h1>
        <p className='desc'>The Delhi Commission for Protection of Child Rights has attempted to create extensive repository of all existing entitlements and relevant information which could be of benefit to Persons with Disabilities & their caregivers in Delhi. This website aims to address the information asymmetry by creating awareness about the rights of Persons with Disabilities, especially Children with Special Needs or Children who have parents with disabilities & assist them in understanding the means of leveraging rightful entitlements for their own benefit.</p>
        <p className='click_me'>Click to know your rights & entitlement</p>
        <div className='butt'>
            <button>Get Started</button>
        </div>
    </div>
  )
}

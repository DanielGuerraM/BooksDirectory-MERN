import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import './register.scss'

export default class register extends Component {

  render() {
    return (
      <div className='form-register-container'>
        <h1>Books directory</h1>
        <h2>Register</h2>
        <form>
          <div className='input-register-container'>
            <div className='left-register'>
              <label htmlFor='names'>Names</label>
              <input
                type='text'
                id='names'
                name='names'
                placeholder='Your names'
                autoComplete='off'/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
          </div>
          <div className='input-register-container'>
            <div className='left-register'>
              <label htmlFor='lastname'>Last name</label>
              <input
                type='text'
                id='lastname'
                name='lastname'
                placeholder='Your last name'
                autoComplete='off'/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
          </div>

          <div className='input-register-container'>
            <div className='left-register'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Your email'
                autoComplete='off'/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
          </div>
          
          <div className='input-register-container'>
            <div className='left-register'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Your password'
                autoComplete='off'/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-key" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
              <path d="M15 9h.01"></path>
            </svg>
          </div>

          <button className='button-register' type='submit'>Register</button>
          <Link className='link-register' to='/'>Already have an account?, log in</Link>
        </form>
      </div>
    )
  }
}

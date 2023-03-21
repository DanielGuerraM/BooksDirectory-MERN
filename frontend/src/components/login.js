import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import './login.scss'


export default class login extends Component {

  state = {
    email: '',
    password: ''
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:4000/api/users', {
      email: this.state.email,
      password: this.state.password
    })
    this.setState({
      email: '',
      password: ''
    })
    
  }

  render() {

    return (
      <div className='form-container'>
        <h1>Books directory</h1>
        <h2>Log In</h2>
        <form onSubmit={this.onSubmit}>
          <div className='input-container'>
            <div className='left'>
              <label htmlFor='email'>Email</label>
              <input
                onChange = {this.onChangeEmail}
                value = {this.state.email}
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
          
          <div className='input-container'>
            <div className='left'>
              <label htmlFor='password'>Password</label>
              <input
                onChange = {this.onChangePassword}
                value = {this.state.password}
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

          <button className='button' type='submit'>Log In</button>
          <Link className='link' to='/register'>Don't have an account? Create one</Link>
        </form>
      </div>
    )
  }
}

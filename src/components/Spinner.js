import React, { Component } from 'react'
import walk from './Walk.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
      <img src= {walk} alt="walking" />
        
      </div>
    )
  }
}

export default Spinner

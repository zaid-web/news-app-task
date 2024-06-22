import React from 'react'
import loading from './spinner.gif'

const Spinner = () => {

    return (
      <div className='text-center'>
        <img src={loading} style={{height: "50px"}} alt="Spinner" />
      </div>
    )
}

export default Spinner
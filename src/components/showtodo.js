import React from 'react'

function Showtodo(props) {
  return (
    <div className='container'>
        <div className='row my-3'>
            <div className='col-6'>
                <h6>{props.task}</h6>

            </div>
            <div className='col-6'>
                <button onClick={() =>{props.onSelect(props.id)}}>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default Showtodo
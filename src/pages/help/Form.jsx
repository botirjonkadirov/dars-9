import React from 'react'

function Form() {
  return (
    <>
    <h1>Send your question</h1>
    <hr />
    <div className='form-container'>
        <label className='form-control'>
            <span>Your Email</span>
            <input type="text" />
        </label>
        <label className='form-control'>
            <span>Your Email</span>
            <textarea></textarea>
        </label>
        <button className='button'>Send</button>

    </div>
    </>
  )
}

export default Form
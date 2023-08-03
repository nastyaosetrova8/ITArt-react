import React from 'react'

export const RegistrationForm = () => {

  const handlerOnSubmit = (evt) =>{
    evt.preventDefault();

  }
  return (
    <>
    <div>RegistrationForm</div>
    <form onSubmit={handlerOnSubmit}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button type='submit'></button>
    </form>
    </>
  )
}

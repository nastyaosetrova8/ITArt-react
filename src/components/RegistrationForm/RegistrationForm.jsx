import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/Thunks/AuthUserThunk';


export const RegistrationForm = () => {

  const dispatch = useDispatch()
  
  const handlerOnSubmit = (evt) =>{
    evt.preventDefault();
   
    const children = evt.currentTarget.elements
    const username = children.username.value
    const email = children.email.value
    const password = children.password.value

    const registerUserData = {username, email, password}
    console.log(registerUserData);
    dispatch(registerUserThunk(registerUserData))
    evt.currentTarget.reset();
  }
  
  return (
    <>
    <h3>RegistrationForm</h3>
    <form onSubmit={handlerOnSubmit} style={{
      width: '500px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
      }}>
      <label htmlFor="">Name</label>
      <input type="text" name="username"/>
      <label htmlFor="">Email</label>
      <input type="email" name="email"/>
      <label htmlFor="">Password</label>
      <input type="password" name="password"/>
      <label htmlFor="">Confirm Password</label>
      <input type="password" />
      <button type='submit'>REGISTER</button>
    </form>
    </>
  )
}

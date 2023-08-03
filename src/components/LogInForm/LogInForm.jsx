import { useDispatch, useSelector } from 'react-redux';
import { logInUserThunk, logOutUserThunk } from 'redux/Thunks/AuthUserThunk';
import { selectUserName } from 'redux/selectors';

export const LogInForm = () => {
  const userName = useSelector(selectUserName)
  const dispatch = useDispatch();

  const handlerOnSubmit = evt => {
    evt.preventDefault();

    const children = evt.currentTarget.elements;
    const email = children.email.value;
    const password = children.password.value;

    const logInUserData = { email, password };
    dispatch(logInUserThunk(logInUserData));
    //evt.currentTarget.reset();
  };

  const handleOnClick = () => {
    dispatch(logOutUserThunk());
  };



  return (
    <>
      <h3>LogInForm</h3>
      <form
        onSubmit={handlerOnSubmit}
        style={{
          width: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <label htmlFor="">Email</label>
        <input type="email" name="email" />
        <label htmlFor="">Password</label>
        <input type="password" name="password" />
        <button type="submit">LOG IN</button>
      </form>

      <div>
        <p>Hello, {userName}</p>
        <button type="submit" onClick={handleOnClick}>
          Log Out
        </button>
      </div>

    </>
  );
};

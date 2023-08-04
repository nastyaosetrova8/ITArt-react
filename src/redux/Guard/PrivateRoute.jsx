import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import { selectIsAuth } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? children : <Navigate to="/register" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import { selectIsAuth } from 'redux/selectors';

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  return !isAuth ? children : <Navigate to="/home" />;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
};

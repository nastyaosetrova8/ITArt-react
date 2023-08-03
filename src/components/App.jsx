import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { getCurrentUserThunk } from 'redux/Thunks/AuthUserThunk';

const Home = lazy(() => import('pages/HomePage/Home'));
const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const Register = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const Statistic = lazy(() => import('pages/StatisticPage/Statistic'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);
  return (
    <Suspense
    // fallback={<Loader />}
    >
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="statistic" element={<Statistic />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/register" replace />}></Route>
      </Routes>
    </Suspense>
  );
};

import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';

const Home = lazy(() => import('pages/HomePage/Home'));
const Login = lazy(() => import('pages/LoginPage/Login'));
const Register = lazy(() => import('pages/RegisterPage/Register'));
const Statistic = lazy(() => import('pages/StatisticPage/Statistic'));

export const App = () => {
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

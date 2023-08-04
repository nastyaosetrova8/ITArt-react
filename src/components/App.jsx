import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';

import { useDispatch } from 'react-redux';
import { getCurrentUserThunk } from 'redux/Thunks/AuthUserThunk';

const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));

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
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<DashboardPage />} />
          <Route path="statistic" element={<SummaryPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/register" replace />}></Route>
      </Routes>
    </Suspense>
  );
};

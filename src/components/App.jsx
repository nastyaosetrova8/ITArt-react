import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';

const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));

export const App = () => {
  return (
    <Suspense
    // fallback={<Loader />}
    >
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
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

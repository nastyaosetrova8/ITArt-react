import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserThunk } from 'redux/Thunks/AuthUserThunk';
import { PrivateRoute } from 'redux/Guard/PrivateRoute';
import { PublicRoute } from 'redux/Guard/PublicRoute';
import Loader from './Loader/Loader';
import { selectToken } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken)

  useEffect(() => {
    if(!token)return
    dispatch(getCurrentUserThunk());
  }, [dispatch, token]);

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="/" element={<Layout />}>
          <Route
            path="home"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="statistic"
            element={
              <PrivateRoute>
                <SummaryPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/register" replace />}></Route>
      </Routes>
    </Suspense>
    </>
  );
};

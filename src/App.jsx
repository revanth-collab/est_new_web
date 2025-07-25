import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './utils/AuthContext.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import Layout from './layout/Layout.jsx';
import ErrorBoundary from './others/ErrorBoundary.jsx';
import ErrorFallback from './others/ErrorFallback.jsx';
import Whatsapp from './components/Whatsapp/Whatsapp.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Lazy-loaded pages
const Login = lazy(() => import('./pages/Login.jsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.jsx')); // Admin Dashboard
const PageNotFound = lazy(() => import('./pages/PageNotFound.jsx')); // 404 Page
const Loading = lazy(() => import('./components/Loading/Loading.jsx'));
const Header = lazy(() => import('./components/Header/Header.jsx'));
const Contact = lazy(() => import('./pages/Contact1.jsx'));
const PartnerPage = lazy(() => import('./pages/PartnerPage.jsx'));


// Protected route wrapper
const ProtectedRoute = () => {
  const { isAuthenticated, isInitialized, loading } = useAuth();
  if (!isInitialized || loading) return <Loading />;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

// Public route wrapper
const PublicRoute = () => {
  const { isAuthenticated, isInitialized, loading } = useAuth();
  if (!isInitialized || loading) return <Loading />;
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

const App = () => {
  const { isInitialized } = useAuth();

  if (!isInitialized) {
    return <Loading />;
  }

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<Loading />}>
        <Whatsapp />
        <ScrollToTop />
        <ToastContainer />

        <Routes>
          {/* Routes WITHOUT Layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/partner' element={<PartnerPage />} />

          {/* Routes WITH Layout */}
          <Route element={<Layout />}>
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* 404 Route */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;

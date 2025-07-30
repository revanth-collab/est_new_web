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
const Home = lazy(() => import('./pages/Home.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const TermsAndCondition = lazy(() => import('./pages/TermsAndCondition.jsx'))
const RefundPolicy = lazy(() => import("./pages/RefundPolicy.jsx"))
const AccountDeletion = lazy(() => import('./pages/AccountDeletion.jsx'))
const RegisterStore = lazy(() => import("./pages/RegisterStore.jsx"))
const UnderProcess = lazy(() => import('./pages/UnderProcess.jsx'))
const AboutUsSection = lazy(() => import('./pages/AboutUsSection.jsx'))
const RegisterStorePage = lazy(() => import('./pages/RegisterStorePage.jsx'))
const OtpVerification = lazy(() => import('./pages/OtpVerification.jsx'))
const OtpPage = lazy(() => import('./pages/OtpPage.jsx'))

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
          <Route path='/contact' element={<PartnerPage />} />
          <Route path='/signup' element={<RegisterStore />} />
          <Route path='/under-process' element={<UnderProcess />} />
          <Route path='/registerstore' element={<RegisterStorePage />} />
          <Route path='/otp-verification' element={<OtpVerification />} />
          <Route path='/otp' element={<OtpPage />} />

          {/* Routes WITH Layout */}
          <Route element={<Layout />}>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path='/terms-and-condition' element={<TermsAndCondition />} />
            <Route path='/account-deletion' element={<AccountDeletion />} />
            <Route path='/about-us' element={<AboutUsSection />} />
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

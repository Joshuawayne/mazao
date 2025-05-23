
import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from './contexts/AppContext';
import { ROUTES } from './constants';

import SplashScreen from './components/splash/SplashScreen';
import OnboardingScreen from './components/onboarding/OnboardingScreen';
import AuthScreen from './components/auth/AuthScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import SellProduceScreen from './components/sell/SellProduceScreen';
import SmartFarmingHubScreen from './components/farming/SmartFarmingHubScreen';
import ChatScreen from './components/chat/ChatScreen';
import BottomNavbar from './components/navigation/BottomNavbar';
import MainHeader from './components/navigation/MainHeader';
import Sidebar from './components/navigation/Sidebar'; // Import Sidebar

// ProtectedRoute component defined outside App
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAppContext();
  if (!user || !user.isLoggedIn) {
    return <Navigate to={ROUTES.AUTH} replace />;
  }
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { isFirstVisit, user } = useAppContext();
  const location = useLocation();

  let initialElement = <AuthScreen />;
  if (isFirstVisit) {
    initialElement = <OnboardingScreen />;
  } else if (user && user.isLoggedIn) {
    // If logged in and not first visit, navigate to home from splash
    if (location.pathname === ROUTES.SPLASH) {
      initialElement = <Navigate to={ROUTES.HOME} replace />;
    } else {
      // If already on a protected route or trying to access auth/onboarding while logged in, redirect to home
       initialElement = <Navigate to={ROUTES.HOME} replace />;
    }
  } else {
     // Not logged in, not first visit
    if (location.pathname === ROUTES.SPLASH) { // From splash to auth
        initialElement = <AuthScreen />;
    } else if (location.pathname === ROUTES.ONBOARDING && !isFirstVisit) { // Trying to access onboarding after completing it
        initialElement = <AuthScreen />;
    } else if (location.pathname === ROUTES.AUTH) { // Already on auth
        initialElement = <AuthScreen />;
    } else if (isFirstVisit && location.pathname !== ROUTES.ONBOARDING) { // Should be on onboarding but isn't
        initialElement = <OnboardingScreen />;
    }
    // if it's a protected path and user is not logged in, ProtectedRoute will handle it.
  }
  
  // If user is logged in, don't allow access to auth or onboarding via direct URL
  if (user && user.isLoggedIn && (location.pathname === ROUTES.AUTH || location.pathname === ROUTES.ONBOARDING)) {
    return <Navigate to={ROUTES.HOME} replace />;
  }
  // If user has completed onboarding, don't allow access to onboarding via direct URL
  if (!isFirstVisit && location.pathname === ROUTES.ONBOARDING) {
    return <Navigate to={ROUTES.AUTH} replace />;
  }


  return (
    <Routes>
      <Route path={ROUTES.SPLASH} element={initialElement} />
      <Route path={ROUTES.ONBOARDING} element={isFirstVisit ? <OnboardingScreen /> : <Navigate to={ROUTES.AUTH} replace />} />
      <Route path={ROUTES.AUTH} element={user && user.isLoggedIn ? <Navigate to={ROUTES.HOME} replace /> : <AuthScreen />} />
      
      <Route path={ROUTES.HOME} element={<ProtectedRoute><DashboardScreen /></ProtectedRoute>} />
      <Route path={ROUTES.SELL_PRODUCE} element={<ProtectedRoute><SellProduceScreen /></ProtectedRoute>} />
      <Route path={ROUTES.SMART_FARMING} element={<ProtectedRoute><SmartFarmingHubScreen /></ProtectedRoute>} />
      <Route path={ROUTES.CHAT} element={<ProtectedRoute><ChatScreen /></ProtectedRoute>} />
      
      <Route path="*" element={<Navigate to={ROUTES.SPLASH} replace />} />
    </Routes>
  );
};


const App: React.FC = () => {
  const { isLoading, user, isSidebarCollapsed } = useAppContext();

  if (isLoading) {
    return <SplashScreen />;
  }
  
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <MainHeader />
        <div className="flex flex-1 pt-[var(--header-height)]"> {/* Container for sidebar and main content, starts below header */}
          {user && user.isLoggedIn && <Sidebar />} {/* Sidebar for logged-in users, hidden on mobile by its own classes */}
          <main 
            className={`flex-grow overflow-y-auto px-2 sm:px-4 py-4 pb-[var(--footer-height)] md:pb-4 transition-all duration-300 ease-in-out
                        ${user && user.isLoggedIn ? (isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64') : 'ml-0'} `}
            // md:ml-20 for collapsed sidebar, md:ml-64 for expanded. ml-0 if no user (no sidebar).
            // pb-[var(--footer-height)] for mobile ensures content above bottom nav.
            // md:pb-4 for desktop ensures standard padding.
          >
            <AppRoutes />
          </main>
        </div>
        {user && user.isLoggedIn && <BottomNavbar />} {/* Bottom Navbar for mobile */}
      </div>
    </HashRouter>
  );
};

export default App;

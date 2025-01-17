import { useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import './App.css';
import { Navbar2 } from './components/Navbar2';
import { Footer } from './components/Footer';
import { CreateSpaceModal } from './components/CreateSpaceModal';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { EmbedSingleTestimonial } from './components/EmbedSingleTestimonial';
import { SignIn } from './components/SignupSignin/SignIn';
import { Signup } from './components/SignupSignin/Signup';
import { SpaceDashboard } from './components/SpaceDetails/SpaceDashboard';
import { LandingPage } from './components/LandingPage/LandingPage';
import { DeleteSpaceModal } from './components/DeleteSpace/DeleteSpacModal';
import { UserReviewPage } from './components/UserReviewPage/UserReviewPage';
import 'video-react/dist/video-react.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SummarizeModal } from './components/SummarizeModal';
import { WolCodeGeneration } from './components/CodeGeneration/WallOfLove/WolCodeGeneration';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark'); // Apply dark theme on load
  }, []);

  function ConditionalNavbar() {
    const location = useLocation();
  
    // Paths where the Navbar should not be displayed
    const hideNavbarOnRoutes = ['/review/', '/wol/'];
  
    // Check if the current location should hide the Navbar
    const shouldHideNavbar = hideNavbarOnRoutes.some(path => location.pathname.includes(path));
  
    // Conditionally render the Navbar
    return !shouldHideNavbar ? <Navbar2 /> : null;
  }


  return (
    <BrowserRouter>
      <div className="bg-gray-900 w-full h-full App">
        <ToastContainer />
        <div className="mx-auto px-4 sm:px-8 lg:px-16">
          <ConditionalNavbar />

          <Routes>
            <Route path="/dashboard" element={
              <div>
                <div className="flex justify-around">
                  <Dashboard />
                </div>
                <Footer />
                <CreateSpaceModal />
                <DeleteSpaceModal />
              </div>
            } />
            <Route path="/" element={
              <div>
                <LandingPage />
                <Footer />
              </div>
            } />
            <Route path="/signin" element={
              <div className="flex justify-around">
                <SignIn />
              </div>
            } />
            <Route path="/signup" element={
              <div className="flex justify-around">
                <Signup />
              </div>
            } />
            <Route path="/product/:domain" element={
              <div>
                <SpaceDashboard />
                <EmbedSingleTestimonial />
                <CreateSpaceModal />
                <SummarizeModal />
              </div>
            } />
            {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          </Routes>
        </div>
      </div>
      <Routes>
        <Route path="/review/:space" element={<UserReviewPage />} />
        <Route path="/wol/:domain" element={<WolCodeGeneration/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

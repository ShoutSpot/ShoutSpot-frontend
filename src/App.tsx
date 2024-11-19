import { Dashboard } from './components/Dashboard'
import './App.css'
import { Navbar2 } from './components/Navbar2'
import { Footer } from './components/Footer'
import { CreateSpaceModal } from './components/CreateSpaceModal'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SingleReview } from './components/SingleReview'
import { EmbedSingleTestimonial } from './components/EmbedSingleTestimonial'
import { SignIn } from './components/SignupSignin/SignIn'
import { Signup } from './components/SignupSignin/Signup'
import { SpaceDashboard } from './components/SpaceDetails/SpaceDashboard'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className='bg-gray-900 w-full h-full'>
            <div className='mx-auto px-4 sm:px-8 lg:px-16'>
              <Navbar2 />
              <div className='flex justify-around' >
                <Dashboard />
              </div>
              <Footer />
              <div className='w-screen h-screen block text-center '>
                <CreateSpaceModal />
              </div>
              {/* <SingleReview reviewType='Text' positiveStarsCount={3} reviewVideo='hello' reviewText='Hi you all good' reviewImage='public/userlogo.png' userDetails={{name : 'Shreyas', companyName: "NielsenIQ", email:'shreyas.patil@nielseniq.com', address: 'pune', socialLink:'linkedin', submitDateTime: '19th Nov 2024'}} /> */}
              <EmbedSingleTestimonial />
            </div>
          </div>} />

        <Route path="/signin" element={
          <div className='bg-gray-900 w-full h-full'>
            <div className='mx-auto px-4 sm:px-8 lg:px-16'>
              <Navbar2 />
              <div className='flex justify-around' >
                <SignIn />
              </div>
            </div>
          </div>} />

        <Route path="/signup" element={
          <div className='bg-gray-900 w-full h-full'>
            <div className='mx-auto px-4 sm:px-8 lg:px-16'>
              <Navbar2 />
              <div className='flex justify-around' >
                <Signup />
              </div>
            </div>
          </div>} />
        <Route path="/product/space" element={
          <div className='bg-gray-900 w-full h-full'>
            <div className='mx-auto px-4 sm:px-8 lg:px-16'>
              <Navbar2 />
              <SpaceDashboard />
            </div>
          </div>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

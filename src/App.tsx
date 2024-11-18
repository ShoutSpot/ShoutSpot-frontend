import { Dashboard } from './components/Dashboard'
import './App.css'
import { Navbar2 } from './components/Navbar2'
import { Footer } from './components/Footer'
import { CreateSpaceModal } from './components/CreateSpaceModal'
import { SingleReview } from './components/SingleReview'

function App() {

  return (
    <div className='bg-gray-900 w-full h-full'>
      <div className='mx-auto px-4 sm:px-8 lg:px-16'>
        <Navbar2/>
        {/* <div className='flex justify-around' >
          <Dashboard/>
        </div> */}
        <Footer/>
        {/* <div className='w-screen h-screen block text-center '>
          <CreateSpaceModal/>
        </div> */}
        <SingleReview reviewType='Text' positiveStarsCount={3} reviewVideo='hello' reviewText='Hi you all good' reviewImage='public/userlogo.png' userDetails={{name : 'Shreyas', companyName: "NielsenIQ", email:'shreyas.patil@nielseniq.com', address: 'pune', socialLink:'linkedin', submitDateTime: '19th Nov 2024'}} />
        
      </div>
    </div>
  )
}

export default App

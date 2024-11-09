import { Dashboard } from './components/Dashboard'
import './App.css'
import { Navbar2 } from './components/Navbar2'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='bg-gray-900 w-full h-full'>
      <div className='mx-auto px-4 sm:px-8 lg:px-16'>
        <Navbar2/>
        <div className='flex justify-around' >
          <Dashboard/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App

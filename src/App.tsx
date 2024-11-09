import { Dashboard } from './components/Dashboard'
import './App.css'
import { Navbar2 } from './components/Navbar2'

function App() {

  return (
    <div className='bg-gray-900 w-full h-full'>
      <div className='max-w-5xl mx-auto px-4 sm:px-8 lg:px-16'>
        <Navbar2/>
        <Dashboard/>
      </div>
      
    </div>
  )
}

export default App

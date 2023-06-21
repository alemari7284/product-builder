import Navbar from './components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import Models from './components/Body/Models'

function App() {
  return (
    <div>
      <Navbar />
      <Models />
    </div>
  )
}

export default App

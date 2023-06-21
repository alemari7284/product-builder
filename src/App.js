import Navbar from './components/Navbar/Navbar'
import Content from './components/Body/Content'
import { useSelector } from 'react-redux'

function App() {
  return (
    <div>
      <Navbar />
      <Content />
    </div>
  )
}

export default App

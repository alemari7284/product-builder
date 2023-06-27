import Models from './components/Body/Models'
import Colors from './components/Body/Colors'
import Accessories from './components/Body/Accessories'
import Summary from './components/Body/Summary'
import { Routes, Route, useNavigate } from 'react-router-dom'
import withNavbar from './components/HOC/withNavbar'

function App() {
  const ModelsWN = withNavbar(Models)
  const ColorsWN = withNavbar(Colors)
  const AccessoriesWN = withNavbar(Accessories)
  const SummaryWN = withNavbar(Summary)

  return (
    <Routes>
      <Route path="/" element={<ModelsWN />} />
      <Route path="/colors" element={<ColorsWN />} />
      <Route path="/accessories" element={<AccessoriesWN />} />
      <Route path="/summary" element={<SummaryWN />} />
    </Routes>
  )
}

export default App

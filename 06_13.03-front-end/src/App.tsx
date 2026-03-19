import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ManageSportlased from './pages/ManageSportlased'

function App() {

  return (
    <>

      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/manage-sportlased">
        <button>Manage Sportlased</button>
      </Link>


      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/manage-sportlased" element={ <ManageSportlased /> } />
      </Routes>

    </>
  )
}

export default App

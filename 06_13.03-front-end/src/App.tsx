import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ManageSportlased from './pages/ManageSportlased'
import KaugusHupe from './pages/alad/KaugusHupe'
import Kettaheide from './pages/alad/Kettaheide'
import KorgusHupe from './pages/alad/KorgusHupe'
import KuuliTouge from './pages/alad/KuuliTouge'
import NeljasajaMeetriJooks from './pages/alad/NeljasajaMeetriJooks'
import Odavise from './pages/alad/Odavise'
import SajaMeetriJooks from './pages/alad/SajaMeetriJooks'
import Teivashupe from './pages/alad/Teivashupe'
import Tokkejooks from './pages/alad/Tokkejooks'
import TuhandeViiesajaJooks from './pages/alad/TuhandeViiesajaJooks'

function App() {

  return (
    <>

      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/manage-sportlased">
        <button>Manage Sportlased</button>
      </Link>
      <Link to="/kaugushupe">
        <button>Kaugushüpe</button>
      </Link>
      <Link to="/kettaheide">
        <button>Kettaheide</button>
      </Link>
      <Link to="/korgushupe">
        <button>Kõrgushüpe</button>
      </Link>
      <Link to="/kuulitouge">
        <button>KuuliTõuge</button>
      </Link>
      <Link to="/neljasaja-jooks">
        <button>Neljasaja meetri jooks</button>
      </Link>
      <Link to="/odavise">
        <button>Odavise</button>
      </Link>
      <Link to="/saja-jooks">
        <button>Saja meetri jooks</button>
      </Link>
      <Link to="/teivashupe">
        <button>Teivashüpe</button>
      </Link>
      <Link to="/tokkejooks">
        <button>Tõkkejooks</button>
      </Link>
      <Link to="/tuhande-jooks">
        <button>Tuhandeviiesaja meetri jooks</button>
      </Link>


      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/manage-sportlased" element={ <ManageSportlased /> } />
        <Route path="/kaugushupe" element={ <KaugusHupe /> } />
        <Route path="/kettaheide" element={ <Kettaheide /> } />
        <Route path="/korgushupe" element={ <KorgusHupe /> } />
        <Route path="/kuulitouge" element={ <KuuliTouge /> } />
        <Route path="/neljasaja-jooks" element={ <NeljasajaMeetriJooks /> } />
        <Route path="/odavise" element={ <Odavise /> } />
        <Route path="/saja-jooks" element={ <SajaMeetriJooks /> } />
        <Route path="/teivashupe" element={ <Teivashupe /> } />
        <Route path="/tokkejooks" element={ <Tokkejooks /> } />
        <Route path="/tuhande-jooks" element={ <TuhandeViiesajaJooks /> } />
      </Routes>

    </>
  )
}

export default App

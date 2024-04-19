import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Events from './Pages/Events';
import ReservedArea from './Pages/ReservedArea';
import ProtectedRouter from './Middleware/ProtectedRoutes';
import Contacts from './Pages/Contacts';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/servizi" element={<Service />} />
        <Route path="/eventi" element={<Events />} />
        <Route path="/contatti" element={<Contacts />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/reserved-area" element={<ReservedArea />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App


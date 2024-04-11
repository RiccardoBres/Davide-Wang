import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Events from './Pages/Events';
import ReservedArea from './Pages/ReservedArea';
import ProtectedRouter from './Middleware/ProtectedRoutes';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/servizi" element={<Service />} />
        <Route exact path="/eventi" element={<Events />} />
        <Route element={<ProtectedRouter />}>
          <Route exact path="/reserved-area" element={<ReservedArea />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App


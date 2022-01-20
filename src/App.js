import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import General from './Components/General/General';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>

        <Routes>
          <Route path="/Covlombia-react" element={<General />} />
        </Routes>
    </Router>
  );
}

export default App;

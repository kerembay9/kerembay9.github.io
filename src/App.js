// Import necessary modules from React
import React from 'react';
import { BrowserRouter as Router, Route,Routes, NavLink } from 'react-router-dom';
import './App.css'; // Import your CSS file for styling
import Cpp from './components/Cpp';
import MachineLearning from './components/MachineLearning';
import Blockchain from './components/Blockchain';
import WebDevelopment from './components/WebDevelopment';
import About from './components/About';

// Functional component representing your App
function App() {
  // Define your personal information
  const name = 'Kerem Bayramoğlu';

  return (
    <Router>
      <div className="app">
        {/* Navbar section */}
        <nav className="app-navbar">
          <ul>
            <li id="NavbarName"><NavLink to="/">{name}</NavLink></li>

            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/cpp">C++</NavLink></li>
            <li><NavLink to="/machine-learning">Machine Learning</NavLink></li>
            <li><NavLink to="/blockchain">Blockchain</NavLink></li>
            <li><NavLink to="/web-development">Web Development</NavLink></li>
          </ul>
        </nav>

        {/* Main content section */}
        <main className="app-main">


          {/* React Router Routes */}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/cpp" element={<Cpp />} />
            <Route path="/machine-learning" element={<MachineLearning />} />
            <Route path="/blockchain" element={<Blockchain />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer section */}
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} {name}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

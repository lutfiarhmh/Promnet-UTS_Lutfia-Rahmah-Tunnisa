import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import NB from './Components/NB';
import Home from './Components/Home';
import About from './Components/About';
import Galery from './Components/Galery';
import Contact from './Components/Contact';

const App = () => {
  return (
    <Router>
      <NB />
      <Home />
      <About/>
      <Galery/>
      <Contact/>
      <Routes>
      <Route path="/" components={Home} />
        <Route path="/about" components={About} />
        <Route path="/galery" components={Galery} />
        <Route path="/contact" components={Contact} />
        
      </Routes>
    </Router>
  );
}

export default App;

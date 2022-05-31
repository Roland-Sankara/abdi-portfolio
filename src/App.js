import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ContextProvider} from './context/AppContext';

function App(){
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={
              <div>
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
              </div>
            }/>
            
            <Route path='/:project' element={
              <ProjectDetail/>
            }/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App;

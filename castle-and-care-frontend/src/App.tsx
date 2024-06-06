import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/home';
import AboutPage from '../src/pages/about';
import ContactPage from '../src/pages/contact';
import NotFoundPage from './pages/notFound';
import Layout from "./components/layout/layout";

function App() {
  return (
        <Router>
              <Routes>
                  <Route path="/"  element={<Layout />} >
                      <Route path="/"  element={<HomePage />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                      <Route path="*" element={<NotFoundPage />} />
                  </Route>
              </Routes>
        </Router>
  );
}

export default App;

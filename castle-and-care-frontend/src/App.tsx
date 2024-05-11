import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/notfound';
import Layout from "./components/layout/layout";


function App() {
  return (
        <Router>
              <Routes>
                  <Route path="/"  element={<Layout />} />
                      <Route index element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="*" element={<NotFoundPage />} />
              </Routes>
        </Router>
  );
}

export default App;

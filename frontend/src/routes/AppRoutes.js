import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Movie from '../pages/Movie';
import Session from '../pages/Session';
import NotFound from '../pages/NotFound';
import Search from '../pages/Search';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/movies/:id" element={ <Movie /> } />
        <Route path="/sessions/:id" element={ <Session /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}
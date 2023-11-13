// App.js
import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          {/* <Route path="*" element={<Profile />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;

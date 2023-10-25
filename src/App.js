import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  addPost={props.addPost}
                  updateNewPostChange={props.updateNewPostChange}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={<Dialogs state={props.state.messagesPage} />}
            />
            {/* <Route path="*" element={<Profile />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

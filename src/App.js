// App.js
import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withRouter from './hoc/withRouter';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);

const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    const ProfileContainerComp = withSuspense(ProfileContainer);
    const DialogsContainerComp = withSuspense(DialogsContainer);

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile/:userId?"
              element={<ProfileContainerComp />}
            />
            <Route path="/dialogs/*" element={<DialogsContainerComp />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="*" element={<Profile />} /> */}
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainJSApp;

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import settingsPage from './components/settingsPage';
import landingPage from './components/landingPage';
import loginPage from './components/loginPage';
import notificationsPage from './components/notificationsPage';
//component for the app with routes to other components
export default function App(props) {
  return (
    <Router>
      <div className="app">
                <header>
                    <h1><Link to="/">AAA staffing app</Link></h1>
                    <h1><Link to="/settingsPage">settings</Link></h1>
                    <h1><Link to="/loginPage">Login</Link></h1>
                </header>
                <main>
                    <Route exact path="/" component={landingPage} />
                    <Route exact path="/settingsPage" component={settingsPage} />
                    <Route exact path="/loginPage" component={loginPage} />
                    <Route exact path="/notificationsPage" component={notificationsPage} />
                </main>
            </div>
    </Router>
  );
}
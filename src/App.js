import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { 
  homePath,
  selfPath,
  projectsPath,
  contactPath,
  signUpPath,
  shopPath,
  checkoutPath,
  ecomPath,
  dndPath,
} from "./Routes"
// import logo from './logo.svg';
import './App.css';

import Home from './components/home/home';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/Contact';
import Authentication from './components/authentication/authentication';
import Shop from './components/shop/shop.component';
import CheckOut from './components/checkout/checkout';
import Dashboard from './components/dashboard/dashboard';
import Navigation from './components/navigation/navigation.component';
import DragAndDrop from './components/drag-and-drop/drag-and-drop/drag-and-drop.component';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          exact
          path='/'
          element={<Home /> } 
        />
        <Route 
          exact
          path={ecomPath}
          element={<Navigation /> } 
        >
          <Route 
            exact
            index
            element={<Dashboard /> } 
          />
          <Route 
            exact
            path={shopPath}
            element={<Shop /> }
          />
          <Route 
            exact
            path={dndPath}
            element={<DragAndDrop /> }
          />
          <Route 
            exact
            path={signUpPath}
            element={<Authentication /> }
          />
          <Route 
            exact
            path={checkoutPath}
            element={<CheckOut /> }
          />
        </Route>
        <Route 
          exact
          path={signUpPath}
          element={<Authentication /> }
        />
        <Route 
          exact
          path={projectsPath}
          element={<Projects /> } 
        />
        <Route 
          exact
          path={contactPath}
          element={<Contact /> } 
        />
        <Route 
          exact
          path={shopPath}
          element={<Shop /> }
        />
      </Routes>
    </Router>
  );
}

export default App;

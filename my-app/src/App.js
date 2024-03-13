import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import Dashboard from './components/Dashboard';
import Export from './components/Export';
import Import from './components/Import';
import Visualization from './components/Visualization';
import RestComponent from './components/AdminPanel/Rest';
import UserPanel from './components/UserPanel';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Nowa składnia element */}
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/userpanel" element={<UserPanel />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/REST" element={<RestComponent />} />
        <Route path="/export" element={<Export />} />
        <Route path="/import" element={<Import />} />
        <Route path="/visualization" element={<Visualization />} />
      </Routes>
    </Router>
  );
};

export default App;

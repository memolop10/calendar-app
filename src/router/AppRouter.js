import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate} from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/Calendar/CalendarScreen';

function AppRouter() {
  return( 
  <Router>
      <div>
      <Routes>
          <Route 
            path="/login"
            element={ <LoginScreen /> }
          />

          <Route
            path="/"
            element={ <CalendarScreen /> }
            />
            
            <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
      </div>
  </Router>
)}

export default AppRouter;

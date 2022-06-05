import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes, Navigate} from 'react-router-dom';
import { startChecking } from '../actions/auth';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/Calendar/CalendarScreen';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function AppRouter() {

  const dispatch = useDispatch();
  const { checking, uid } = useSelector( state => state.auth );

  useEffect(() => {
    dispatch( startChecking() )
  }, [dispatch])
  
  if (checking) {
    return (<h5> Wait.... </h5>)
  }

  return( 
  <Router>
      <div>
      <Routes>
        <Route   
            exact path="/login"
            element={ <PublicRoute 
                          uid={ uid }
                        >
                        <LoginScreen /> 

                      </PublicRoute>
                    

            }
            
          />

          <Route exact path="/"
            element={ 
              <PrivateRoute
                uid={ uid }
              >
                <CalendarScreen /> 

              </PrivateRoute>
            }   
          />
            
            <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
      </div>
  </Router>
)}

export default AppRouter;

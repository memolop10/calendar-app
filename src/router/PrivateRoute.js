import React from 'react'
import { Navigate } from 'react-router'
import PropTypes from 'prop-types'

const PrivateRoute = ({ uid, children }) => {

    // console.log(rest.location.pathname) 
    // localStorage.setItem('lastPath',rest.location.pathname)

    return (
        !!  uid ? 
            children : 
            <Navigate to='/login' />
    )
            
    
}

// PrivateRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
// }

export default PrivateRoute
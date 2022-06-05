import React from 'react'
import { Navigate } from 'react-router'
import PropTypes from 'prop-types'

const PublicRoute = ({
    uid,
    children
}) => {

    return( 
        !!uid ? 
        <Navigate to='/'/> : 
        children
    )
}

// PublicRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
// }

export default PublicRoute
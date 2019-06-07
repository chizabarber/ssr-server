// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
// ------------------------------------------------------
import keys from '../../config/keys'
import { logValues } from '../../actions'
import requireAuth from '../../components/hocs/requireAuth'
import AdminDash from './AdminDash'
import UserDash from './UserDash'
// ------------------------------------------------------

class DashboardPage extends Component {
    render () {
        const auth = this.props.auth
        if (auth.googleId === keys.adminID) {
            return (
                <AdminDash/>
            )
        } else {
            return (
                <UserDash />
            )
        }
    }
}

// ------------------------------------------------------
export default {
    component: requireAuth(DashboardPage)
}
// -----------------------------------------------------
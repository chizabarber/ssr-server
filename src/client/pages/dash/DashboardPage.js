// ------------------------------------------------------
import React, { Component } from 'react'
// ------------------------------------------------------
import keys from '../../../../config/keys'
import requireAuth from '../../components/hocs/requireAuth'
import AdminDash from './AdminDash'
import UserDash from './UserDash'
// ------------------------------------------------------

class DashboardPage extends Component {
    render () {
        const auth = this.props.auth
        console.log(`googleId: ${auth.googleId}`)
        console.log(`adminId: ${keys.adminID}`)
        console.log(`process.env: ${keys.environment}`)
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
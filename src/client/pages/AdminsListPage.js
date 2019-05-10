// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
// ------------------------------------------------------
import requireAuth from '../components/hocs/requireAuth'
import { fetchAdmins } from '../actions'
// ------------------------------------------------------

class AdminsListPage extends Component {
    componentDidMount () {
        this.props.fetchAdmins()
    }
    renderAdmins () {
        return this.props.admins.map((admin) => {
            return (
                <li key={admin.id}>{admin.name}</li>
            )
        })
    }
    render () {
        return (
            <div className='container'>
                <h4>Protected list of admins:</h4>
                <ul>{this.renderAdmins()}</ul>
            </div>
        )
    }
}

// ------------------------------------------------------
function mapStateToProps ({ admins }) {
    return { admins }
}
// ------------------------------------------------------
export default {
    loadData: ({ dispatch }) => dispatch(fetchAdmins()),
    component: connect(
        mapStateToProps,
        { fetchAdmins }
    )(requireAuth(AdminsListPage))
}
// ------------------------------------------------------
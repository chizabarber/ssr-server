// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
// ------------------------------------------------------
import { fetchUsers } from '../actions'
// ------------------------------------------------------

class UsersListPage extends Component {
    componentDidMount () {                              // Note: this fetch is still necessary despite loadData via server, bc the user may visit a different component before navigating to this page.
        this.props.fetchUsers()
    }
    renderUsers () {
        return this.props.users.map((user) => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    head () {
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta 
                    property='og:title'
                    content='Users App' 
                />
            </Helmet>
        )
    }
    render () {
        return (
            <div className='container'>
                {this.head()}
                <h4>Here's a big list of users:</h4>
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

// ------------------------------------------------------
function mapStateToProps ({ users }) {
    return { users }
}
// ------------------------------------------------------
export default {
    loadData: ({ dispatch }) => dispatch(fetchUsers()),  // Note: dispatch is being called here bc we don't have access to connect et al in SSR
    component: connect(
        mapStateToProps, { fetchUsers }
    )(UsersListPage)
}
// ------------------------------------------------------
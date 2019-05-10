// ------------------------------------------------------
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// ------------------------------------------------------

class HomePage extends Component {
    head () {
        return (
            <Helmet>
                <title>{`Chiza Barber | com`}</title>
                <meta 
                    property='og:title'
                    content='Users App' 
                />
            </Helmet>
        )
    }
    render () {
        return (
            <div
                className='center-align'
                style={{ marginTop: '200px' }}
            >
                {this.head()}
                <h3>Welcome</h3>
                <p>Check out these awesome features!</p>
            </div>
            
        )
    }
}

// ------------------------------------------------------
export default {
    component: HomePage
}
// ------------------------------------------------------
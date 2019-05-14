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
                <h3
                    style={{
                        color: '#367da2'
                    }}
                >
                    Chiza Barber
                </h3>
                <p>Administrator | Developer</p>
                <hr style={{
                    width: '25%',
                    marginTop: '30px',
                    marginBottom: '30px'
                }} />
                <p>
                    My favorite part of administration is having
                    the opportunity to take something chaotic 
                    and give it coherence.
                </p>
            </div>
            
        )
    }
}

// ------------------------------------------------------
export default {
    component: HomePage
}
// ------------------------------------------------------
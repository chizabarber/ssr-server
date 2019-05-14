// ------------------------------------------------------
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// ------------------------------------------------------

class BlogPage extends Component {
    head () {
        return (
            <Helmet>
                <title>{`C B | com - BLOG`}</title>
                <meta 
                    property='og:title'
                    content='chizabarber.com blog' 
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
                <h3
                    style={{
                        color: '#367da2'
                    }}
                >
                    Come back soon!
                </h3>
                <p>This page is a work in progress...</p>
            </div>
            
        )
    }
}

// ------------------------------------------------------
export default {
    component: BlogPage
}
// ------------------------------------------------------
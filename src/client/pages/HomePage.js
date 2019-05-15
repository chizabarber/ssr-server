// ------------------------------------------------------
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// ------------------------------------------------------
import skillset from '../../images/skillset.png'
// ------------------------------------------------------

class HomePage extends Component {
    head () {
        return (
            <Helmet>
                <title>{`Chiza Barber | com`}</title>
                <meta 
                    property='og:title'
                    content='chizabarber.com' 
                />
            </Helmet>
        )
    }
    renderContent () {
        return (
            <div className='container'>
                <div className='row'>
                    <div 
                        className='col s12 m12 l4'
                        style={{
                            paddingRight: '35px',
                            paddingBottom: '40px'
                        }}
                    >
                        In my many years working in administration,
                        I've done everything from customer service
                        to operations management, and more. Because
                        the lines are so blurry around what an admin 
                        is and is not, I prefer to think of my role 
                        in terms of the 
                        <span style={{
                            color: '#367da2',
                            fontWeight: '900',
                            padding: '5px'
                        }}>
                            impact
                        </span>
                        that I can make, rather than a 
                        specific list of duties.
                    </div>
                    <div 
                        className='col s12 m12 l4'
                        style={{
                            paddingLeft: '35px',
                            paddingRight: '35px',
                            paddingBottom: '40px'
                        }}
                    >
                        The impact that I enjoy most is being able to turn
                        <span style={{
                            color: '#367da2',
                            fontWeight: '900',
                            padding: '5px'
                        }}>
                            chaos
                        </span>
                        into
                        <span style={{
                            color: '#367da2',
                            fontWeight: '900',
                            paddingLeft: '5px'
                        }}>
                            coherence
                        </span>
                        . Historically for me, this coherence 
                        has taken the form of clear visual, 
                        spoken and written communication with 
                        customers and teammates. I have a 
                        penchant for finding the right tools 
                        and processes to facilitate clarity.
                    </div>
                    <div 
                        className='col s12 m12 l4'
                        style={{
                            paddingLeft: '35px'
                        }}
                    >
                        More recently, I've added full-stack web
                        development to my skillset. I see coding
                        as a way to create 
                        <span style={{
                            color: '#367da2',
                            fontWeight: '900',
                            padding: '5px'
                        }}>
                            custom-tailored solutions
                        </span>
                        to team challenges that the 
                        market may not have addressed yet. Whether
                        my next adventure involves a new administrative
                        role or a development role, I'm excited to
                        contribute.
                    </div>
                </div>
            </div>
        )
    }
    renderLinks () {
        return (
            <div>
                <a 
                    href='https://www.linkedin.com/in/chiza-barber'
                    className='btn-flat'
                    style={{
                        paddingRight: '15px',
                        color: '#367da2'
                    }}
                >
                    LinkedIn
                </a>
                <a 
                    href='https://github.com/chizabarber'
                    className='btn-flat'
                    style={{
                        paddingRight: '15px',
                        paddingLeft: '15px',
                        color: '#367da2'
                    }}
                >
                    GitHub
                </a>
                <a 
                    href='mailto: chiza.barber@gmail.com'
                    className='btn-flat'
                    style={{
                        paddingLeft: '15px',
                        color: '#367da2'
                    }}
                >
                    Email
                </a>
            </div>
        )
    }
    render () {
        return (
            <div
                className='center-align'
                style={{ marginTop: '5%' }}
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
                {this.renderLinks()}
                <img 
                    src={skillset} 
                    alt='skillset'
                    style={{
                        width: '65%',
                        marginBottom: '3%',
                        paddingRight: '2%'
                    }}
                />=
                {this.renderContent()}
                <div
                    style={{
                        backgroundColor: '#367da2',
                        height: '6%',
                        paddingTop: '1%',
                        color: 'white'
                    }}
                >
                    Copyright 2019 © Chiza Barber
                </div>
            </div>
        )
    }
}

// ------------------------------------------------------
export default {
    component: HomePage
}
// ------------------------------------------------------
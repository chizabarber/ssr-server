// ------------------------------------------------------
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// ------------------------------------------------------
import skillset from '../../images/skillset.png'
import Button from '../components/Button'
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
                            paddingBottom: '50px'
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
                            paddingBottom: '50px'
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
                            paddingLeft: '35px',
                            paddingBottom: '50px'
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
                <Button
                    url='https://www.linkedin.com/in/chiza-barber'
                    text='LinkedIn'
                    className='left-button btn-flat'
                />
                <Button 
                    url='https://github.com/chizabarber'
                    text='GitHub'
                    className='center-button btn-flat'
                />
                <Button 
                    url='mailto:admin@chizabarber.com'
                    text='Email'
                    className='right-button btn-flat'
                />
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
                <hr className='h-rule' />
                <p>Administrator | Developer</p>
                {this.renderLinks()}
                <img 
                    src={skillset} 
                    alt='skillset'
                    style={{
                        width: '65%',
                        marginBottom: '3%',
                        paddingRight: '2%'
                    }}
                />
                {this.renderContent()}
            </div>
        )
    }
}

// ------------------------------------------------------
export default {
    component: HomePage
}
// ------------------------------------------------------
// ------------------------------------------------------
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// ------------------------------------------------------
import Resume from '../../documents/chizabarber-resume.pdf'
// ------------------------------------------------------

const Header = ({ auth }) => {
    const authButton = auth ? (
        <a href='/api/logout' className='white-text'>
            Log Out
        </a>
    ) : (
        <a href='/api/auth/google' className='white-text'>
            Log In
        </a>
    )
    return (
        <div className='fixed-nav'>
            <nav
                style={{
                    backgroundColor: '#fff',
                    borderTop: '10px solid #367da2',
                    paddingBottom: '60px'
                }}
            >
                <div className='nav-wrapper'>
                    <Link 
                        to='/'
                        className='brand-logo'
                        style={{
                            color: '#367da2',
                            marginLeft: '1%',
                            fontSize: '1.75rem'
                        }}
                    >
                        C B | com
                    </Link>
                    <ul className='right hide-on-small-only'>
                        <li>{authButton}</li>
                        <li>
                            <Link to='/blog' className='black-text'>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <a 
                                href={Resume}
                                target="_blank"
                                className='black-text'
                            >
                                Resume
                            </a>
                        </li>
                        <li>
                            <a 
                                href='http://www.chizabarber.dev' 
                                style={{
                                    color: '#367da2',
                                    fontSize: '1.5rem'
                                }}
                            >
                                | dev
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

// ------------------------------------------------------
function mapStateToProps ({ auth }) {
    return { auth }
}
// ------------------------------------------------------
export default connect(mapStateToProps)(Header)
// ------------------------------------------------------
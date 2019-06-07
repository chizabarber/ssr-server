// ------------------------------------------------------
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// ------------------------------------------------------
import Resume from '../../documents/chizabarber-resume.pdf'
import BrandLogo from './BrandLogo'
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
        <div className='navbar-fixed'>
            <nav
                style={{
                    backgroundColor: '#fff',
                    borderTop: '10px solid #367da2',
                    paddingBottom: '60px'
                }}
            >
                <div className='nav-wrapper'>
                    <BrandLogo />
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
                                href='https://www.chizabarber.dev' 
                                style={{
                                    color: '#367da2',
                                    fontSize: '1.5rem'
                                }}
                            >
                                <span style={{ color: '#000' }}>
                                |
                                </span>
                                <span style={{ marginLeft: '10px' }}>
                                    dev
                                </span>
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
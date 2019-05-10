// ------------------------------------------------------
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// ------------------------------------------------------

const Header = ({ auth }) => {
    console.log('My auth status is', auth)
    const authButton = auth ? (
        <a href='/api/logout' className='black-text'>
            Log Out
        </a>
    ) : (
        <a href='/api/auth/google' className='black-text'>
            Log In
        </a>
    )
    return (
        <nav
            style={{
                backgroundColor: '#fff',
                borderTop: '3px solid #367da2'
            }}
        >
            <div className='nav-wrapper'>
                <Link 
                    to='/'
                    className='brand-logo'
                    style={{
                        color: '#367da2',
                        marginLeft: '1%'
                    }}
                >
                    Chiza Barber | com
                </Link>
                <ul className='right'>
                    <li>
                        <Link to='/users' className='black-text'>
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link to='/admins' className='black-text'>
                            Admins
                        </Link>
                    </li>
                    <li>{authButton}</li>
                </ul>
            </div>
        </nav>
    )
}

// ------------------------------------------------------
function mapStateToProps ({ auth }) {
    return { auth }
}
// ------------------------------------------------------
export default connect(mapStateToProps)(Header)
// ------------------------------------------------------
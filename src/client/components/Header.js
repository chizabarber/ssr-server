// ------------------------------------------------------
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// ------------------------------------------------------

const Header = ({ auth }) => {
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
                        marginLeft: '1%'
                    }}
                >
                    CHIZA BARBER | com
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
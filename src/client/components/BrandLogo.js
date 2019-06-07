// ------------------------------------------------------
import React from 'react'
import { Link } from 'react-router-dom'
// ------------------------------------------------------
import Icon from '../../images/Icon.png'
// ------------------------------------------------------

const BrandLogo = () => {
    return (
        <Link to='/' className='brand-logo'
            style={{
                color: '#367da2',
                fontSize: '1.7rem'
            }}
        >
            <div className='row'>
                <div className='col'>
                    <img 
                        src={Icon} alt='icon'
                        style={{ width: '60px' }}
                    />
                </div>
                <div 
                    className='col'
                    style={{ marginLeft: '-15px' }}
                >
                    <span style={{ color: '#000' }}>
                    |
                    </span>
                    <span style={{ marginLeft: '10px' }}>
                        com
                    </span>
                </div>
            </div>
        </Link>
    )
}

// ------------------------------------------------------
export default BrandLogo
// ------------------------------------------------------
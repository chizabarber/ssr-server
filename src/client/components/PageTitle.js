// ------------------------------------------------------
import React from 'react'
// ------------------------------------------------------

const PageTitle = ({ blk1, blu1, blk2, blu2 }) => {
    return (
        <h3
            style={{
                color: '#367da2'
            }}
        >
            <span style={{ color: '#000' }}>
                {blk1}
            </span>
            <span style={{ marginLeft: '10px' }}>
                {blu1}
            </span>
            <span style={{ color: '#000', marginLeft: '10px' }}>
                {blk2}
            </span>
            <span style={{ marginLeft: '10px' }}>
                {blu2}
            </span>
        </h3>
    )
}

// ------------------------------------------------------
export default PageTitle
// ------------------------------------------------------
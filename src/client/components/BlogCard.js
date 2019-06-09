// ------------------------------------------------------
import React from 'react'
// ------------------------------------------------------
import LinkBtn from '../components/LinkBtn'
// ------------------------------------------------------

const BlogCard = ({ _id, img, title, snippet, date }) => {
    return (
        <div className='card'>
            <div className='card-content'>
                <div 
                    className='right-align'
                    style={{ color: '#367da2' }}
                >
                    {date}
                </div>
                <span className='card-title'>
                    {title}
                </span>
                <img 
                    src={img} alt={title} 
                    className='card-image'
                />
                <p className='left-align card-snippet'>
                    {snippet}
                </p>
            </div>
            <div className='card-action left-align'>
                <LinkBtn 
                    url={`/blog/${_id}`}
                    text='Read More'
                    className='center-button btn-flat'
                />
            </div>
        </div>
    )
}

// ------------------------------------------------------
export default BlogCard
// ------------------------------------------------------
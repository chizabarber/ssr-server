// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
// ------------------------------------------------------
import { fetchBlogPosts } from '../../actions'
import LinkBtn from '../../components/LinkBtn'
// ------------------------------------------------------

class BlogListPage extends Component {
    componentDidMount () {
        this.props.fetchBlogPosts()
    }
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
    renderPosts () {
        const blog = this.props.blog.reverse()
        return blog.map(({ _id, img, title, snippet, date }) => {
            return (
                <div className='col s12 m6 l4' key={_id}>
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
                </div>
            )
        })
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
                    <span style={{ color: '#000' }}>
                        |
                    </span>
                    <span style={{ marginLeft: '10px' }}>
                        com
                    </span>
                    <span style={{ color: '#000', marginLeft: '10px' }}>
                        ·
                    </span>
                    <span style={{ marginLeft: '10px' }}>
                        BLOG
                    </span>
                </h3>
                <hr className='h-rule' />
                <div className='row container'>
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
}

// ------------------------------------------------------
function mapStateToProps ({ blog }) {
    return { blog }
}
// ------------------------------------------------------
export default {
    loadData: ({ dispatch }) => dispatch(fetchBlogPosts()),
    component: connect(
        mapStateToProps, { fetchBlogPosts }
    )(BlogListPage)
}
// ------------------------------------------------------
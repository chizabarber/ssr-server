// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
// ------------------------------------------------------
import { fetchPosts } from '../actions'
import LinkBtn from '../components/LinkBtn'
import Footer from '../components/Footer'
// ------------------------------------------------------

class BlogListPage extends Component {
    componentDidMount () {
        this.props.fetchPosts()
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
        const posts = this.props.blog.posts
        if (posts) {
            return posts.reverse().map(({ id, img, title, snippet }) => {
                return (
                    <div className='col s12 m6 l4' key={id}>
                        <div className='card'>
                            <div className='card-content'>
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
                                    url={`/blog/${id}`}
                                    text='Read More'
                                    className='center-button btn-flat'
                                />
                            </div>
                        </div>
                    </div>
                )
            })
        } else undefined
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
                    | com · BLOG
                </h3>
                <hr className='h-rule' />
                <div className='row container'>
                    {this.renderPosts()}
                </div>
                <Footer />
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
    loadData: ({ dispatch }) => dispatch(fetchPosts()),
    component: connect(
        mapStateToProps, { fetchPosts }
    )(BlogListPage)
}
// ------------------------------------------------------
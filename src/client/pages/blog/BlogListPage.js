// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import _ from 'lodash'
// ------------------------------------------------------
import { fetchBlogPosts } from '../../actions'
import PageTitle from '../../components/PageTitle'
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
        const blog = _.reverse(this.props.blog)
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
                <PageTitle 
                    blk1='|'
                    blu1='com'
                    blk2='·'
                    blu2='BLOG'
                />
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
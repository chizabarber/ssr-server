// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown/with-html'
// ------------------------------------------------------
import { fetchBlogPost } from '../../actions'
// ------------------------------------------------------

class BlogPostPage extends Component {
    componentDidMount () {
        this.props.fetchBlogPost(this.props.match.params.id)
    }
    head () {
        const post = this.props.post
        if (post) {
            const { id, title, img } = post
            return (
                <Helmet>
                    <title>{`BLOG · ${title}`}</title>
                    <meta 
                        property='og:type'
                        content='article'
                    />
                    <meta 
                        property='og:title'
                        content={`${title}`}
                    />
                    <meta 
                        property='og:image'
                        content={`${img}`}
                    />
                    <meta 
                        property='og:image:width'
                        content='200'
                    />
                    <meta 
                        property='og:url'
                        content={`https://www.chizabarber.com/blog/${id}`}
                    />
                </Helmet>
            )
        } else null
    }
    renderContent () {
        const post = this.props.post
        const { title, date, content } = post
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
                    {title}
                </h3>
                {date}
                <hr className='h-rule' />
                <div 
                    className='row container left-align'
                    style={{ marginBottom: '5%' }}
                >
                    <ReactMarkdown 
                        source={content}
                        escapeHtml={false}
                    />
                </div>
            </div>
        )
    }
    render () {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

// ------------------------------------------------------
function mapStateToProps ({ post }) {
    return {
        post: post
    }
}
// ------------------------------------------------------
export default {
    loadData: ({ dispatch, getState }) => dispatch(fetchBlogPost(getState().id)),
    component: connect(
        mapStateToProps, { fetchBlogPost }
    )(BlogPostPage)
}
// ------------------------------------------------------
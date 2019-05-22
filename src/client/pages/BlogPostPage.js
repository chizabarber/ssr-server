// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown/with-html'
// ------------------------------------------------------
import { fetchPost } from '../actions'
import Footer from '../components/Footer'
// ------------------------------------------------------

class BlogPostPage extends Component {
    componentDidMount () {
        this.props.fetchPost(this.props.match.params.id)
    }
    head () {
        const post = this.props.post
        if (post) {
            const { id, title, image } = post
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
                        content={`${image}`}
                    />
                    <meta 
                        property='og:url'
                        content={`/blog/${id}`}
                    />
                </Helmet>
            )
        } else null
    }
    renderContent () {
        const post = this.props.post
        if (post) {
            const { title, text } = post
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
                    <hr className='h-rule' />
                    <div 
                        className='row container left-align'
                        style={{ marginBottom: '5%' }}
                    >
                        <ReactMarkdown 
                            source={text}
                            escapeHtml={false}
                        />
                    </div>
                    <Footer />
                </div>
            )
        } else null
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
function mapStateToProps ({ post }, ownProps) {
    return {
        post: post[`${ownProps.match.params.id}`]
    }
}
// ------------------------------------------------------
export default {
    loadData: ({ dispatch, getState }) => dispatch(fetchPost(getState().id)),
    component: connect(
        mapStateToProps, { fetchPost }
    )(BlogPostPage)
}
// ------------------------------------------------------
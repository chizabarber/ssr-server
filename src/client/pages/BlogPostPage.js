// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
// ------------------------------------------------------
import { fetchPost } from '../actions'
import Footer from '../components/Footer'
// ------------------------------------------------------

class BlogPostPage extends Component {
    componentDidMount () {
        this.props.fetchPost(this.props.match.params.id)
    }
    head () {
        const { title } = this.props.post
        if (title) {
            return (
                <Helmet>
                    <title>{`BLOG · ${title}`}</title>
                    <meta 
                        property='og:title'
                        content={`${title}`}
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
                    <div className='row container'>
                        {text}
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
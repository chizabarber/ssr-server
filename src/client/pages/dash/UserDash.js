// ------------------------------------------------------
import React, { Component } from 'react'
// ------------------------------------------------------

class UserDash extends Component {
    render () {
        return (
            <div
                className='center-align container'
                style={{ marginTop: '5%' }}
            >
                <h3
                    style={{
                        color: '#367da2'
                    }}
                >
                    You found the secret login!
                </h3>
                <hr className='h-rule' />
                <div className='row' style={{ margin: '100px' }}>
                    <p>
                        Hi there! You've found the hidden login route that I use to post content on my code journal and (in the future) interact with my app projects.
                    </p>
                    <p>
                        If the logged-in user ID matches my Google ID, this page displays a form for posting content. Since your Google ID does not match mine, you're seeing this page instead.
                    </p>
                    <p>
                        In the near future, I'll implement a guestbook for visitors who stumble upon this route to post a short comment or message for me if they'd like. In the meantime, feel free to contact me at
                        <a 
                            href='mailto:admin@chizabarber.com'
                            style={{ padding: '5px' }}
                        >
                            admin@chizabarber.com
                        </a>
                        or via my
                        <a 
                            href='https://www.linkedin.com/in/chiza-barber'
                            style={{ paddingLeft: '5px' }}
                        >
                            LinkedIn
                        </a>
                        !
                    </p>
                </div>
            </div>
        )
    }
}

// ------------------------------------------------------
export default UserDash
// ------------------------------------------------------
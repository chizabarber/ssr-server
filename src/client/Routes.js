// ------------------------------------------------------
import App from './App'
import HomePage from './pages/HomePage'
import BlogListPage from './pages/BlogListPage'
import BlogPostPage from './pages/BlogPostPage'
import UsersListPage from './pages/UsersListPage'
import AdminsListPage from './pages/AdminsListPage'
import NotFoundPage from './pages/NotFoundPage'
// ------------------------------------------------------

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...BlogListPage,
                path: '/blog',
                exact: true
            },
            {
                ...BlogPostPage,
                path: '/blog/:id',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]

// ------------------------------------------------------
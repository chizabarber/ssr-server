// ------------------------------------------------------
import App from './App'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
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
                ...BlogPage,
                path: '/blog'
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
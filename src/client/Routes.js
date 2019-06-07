// ------------------------------------------------------
import App from './App'
import HomePage from './pages/HomePage'
import BlogListPage from './pages/blog/BlogListPage'
import BlogPostPage from './pages/blog/BlogPostPage'
import DashBoardPage from './pages/dash/DashboardPage'
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
                ...DashBoardPage,
                path: '/dashboard',
                exact: true
            },
            {
                ...NotFoundPage
            }
        ]
    }
]

// ------------------------------------------------------
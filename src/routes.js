import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
//import { ConnectedRouter } from 'connected-react-router'
import Loadable from 'react-loadable'

import Loader from './components/LayoutComponents/Loader'
import IndexLayout from './layouts'

import Survey from './pages/survey'

const loadable = loader =>
    Loadable({
        loader,
        delay: false,
        loading: () => <Loader />,
    })

const routes = [

    {
        path: '/survey',
        component: loadable(() => import('./pages/survey')),
        exact: false,
    },

    //add all routes here

    {
        path: '/',
        component: loadable(() => import('./pages/home')),
        exact: true,
    },
    {
        path: '/:project',
        component: loadable(() => import('./pages/chapters')),
        exact: false,
    },
]

class MainRouter extends React.Component {
    render() {
        const { history } = this.props
        return (
            <Router history={history}>
                <IndexLayout>
                    <Switch>
                        {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
                        {routes.map(route => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={route.path}
                                exact={route.exact}
                            />
                        ))}
                        {/* <Route exact path="/" render={() => <Redirect to="/survey" />} /> */}
                    </Switch>
                </IndexLayout>
            </Router>
        )
    }
}

export default MainRouter

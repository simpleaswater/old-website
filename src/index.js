import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { logger } from 'redux-logger'
// import thunk from 'redux-thunk'
// import { routerMiddleware } from 'connected-react-router'
// import { createStore, applyMiddleware, compose } from 'redux'
// import reducers from 'redux/reducers'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import MainRouter from './routes'
import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()
/* const routeMiddleware = routerMiddleware(history)
const middlewares = [thunk, sagaMiddleware, routeMiddleware]
if (process.env.NODE_ENV === 'development' && true) {
    middlewares.push(logger)
}
const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)))
window.store = store */

/* ReactDOM.render(
    <Provider store={store}>
        <Router history={history} />
    </Provider>,
    document.getElementById('root'),
) */

const THEME = createMuiTheme({
    typography: {
        "fontFamily": "\"Hind\", \"sans-serif\"",
        /* "fontSize": 16, */
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    },
    palette: {
        secondary: {
            main: '#7A67EE'
        }
    }
});

ReactDOM.render(
    <ThemeProvider theme={THEME}>
        <MainRouter history={history} />
    </ThemeProvider>,
    document.getElementById('root'),
)

serviceWorker.register()
export { history, /* store */ }

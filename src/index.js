import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { logger } from 'redux-logger'
// import thunk from 'redux-thunk'
// import { routerMiddleware } from 'connected-react-router'
// import { createStore, applyMiddleware, compose } from 'redux'
// import reducers from 'redux/reducers'
import { createBrowserHistory } from 'history'
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

ReactDOM.render(
    <MainRouter history={history} />,
    document.getElementById('root'),
)

serviceWorker.register()
export { history, /* store */ }

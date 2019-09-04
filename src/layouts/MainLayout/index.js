import React, { Component, Fragment } from 'react'
import TopBar from '../../components/LayoutComponents/TopBar'
import Footer from '../../components/LayoutComponents/Footer'

export default class MainLayout extends Component {
    render() {
        return (
            <Fragment>
                <TopBar />
                {this.props.children}
                <Footer />
            </Fragment>
        )
    }
}

import React, { Component, Fragment } from 'react'

export default class BlankLayout extends Component {
    render() {
        console.log(this.props)

        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}

import React, { Component, Fragment } from 'react'

export default class BlankLayout extends Component {
    render() {
        return (
            <div style={{ width: window.innerWidth, height: window.innerHeight }}>
                {this.props.children}
            </div>
        )
    }
}

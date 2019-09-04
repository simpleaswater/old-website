import React, { Component } from 'react'

import BlankLayout from './BlankLayout'
import MainLayout from './MainLayout'
import Dashboard from './Dashboard'


export default class index extends Component {
    render() {

        /**
         * 
         * pathType
         * 
         * Home
         * /
         * 
         * 
         * Dashboard
         * /:project/:section/:topic/:subtopic
         * 
         */

        let Layout;
        switch (window.location.pathname.split('/')[1]) {

            case "":
                Layout = <MainLayout {...this.props} />
                break;

            case "survey":
                Layout = <BlankLayout {...this.props} />
                break;

            default:
                Layout = <Dashboard {...this.props} />
                break;
        }

        return Layout
    }
}

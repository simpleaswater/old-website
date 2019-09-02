import React, { Component } from 'react'

import BlankLayout from '../layouts/BlankLayout'
import MainLayout from '../layouts/MainLayout'
import Dashboard from './Dashboard/Dashboard'


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

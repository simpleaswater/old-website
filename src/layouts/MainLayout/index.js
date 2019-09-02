import React, { Fragment } from 'react'
import TopBar from '../../components/LayoutComponents/TopBar'
import Footer from '../../components/LayoutComponents/Footer'
import ShareDrawer from '../../components/LayoutComponents/ShareDrawer'

export default function MainLayout(props) {
    return (
        <Fragment>
            <TopBar />
            {props.children}
            <ShareDrawer />
            <Footer />
        </Fragment>
    )
}

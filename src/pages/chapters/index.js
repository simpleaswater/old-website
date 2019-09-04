import React, { Component, Fragment } from 'react'

import Ipfs from './ipfs'
import Libp2p from './libp2p'

export default class Chapters extends Component {
    render() {

        const chapters = {
            "ipfs": <Ipfs {...this.props} />,
            "libp2p": <Libp2p {...this.props} />
        }

        const { match } = this.props;

        return chapters[match.params.project]
    }
}
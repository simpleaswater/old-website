import React from 'react'
import Why_ipfs from '../learn/why_ipfs'
import How_ipfs_works from './how_ipfs_works'

import Hashes from './part1/hashes'
import Cid from './part1/cid'
import Ipns from './part1/ipns'
import Pinning from './part1/pinning'
import Mfs from './part1/mfs'
import Unixfs from './part1/unixfs'

import Overview from './part1/overview'

export default function Introduction(props) {

    const { match } = props

    const topics = {
        "overview": <Overview {...props} />,

        "why_ipfs": <Why_ipfs {...props} />,
        "how_ipfs_works": <How_ipfs_works {...props} />,

        "hashes": <Hashes {...props} />,
        "cid": <Cid {...props} />,
        "ipns": <Ipns {...props} />,
        "pinning": <Pinning {...props} />,
        "mfs": <Mfs {...props} />,
        "unixfs": <Unixfs {...props} />,
    }

    return topics[match.params.topic]
}
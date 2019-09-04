import React from 'react'
import What_is_ipfs from './what_is_ipfs'
import How_ipfs_works from './how_ipfs_works'
import Getting_Started from './getting_started'
import Faq from './faq'

export default function Introduction(props) {

    const { match } = props

    const topics = {
        "what_is_ipfs": <What_is_ipfs {...props} />,
        "how_ipfs_works": <How_ipfs_works {...props} />,
        "getting_started": <Getting_Started {...props} />,
        "faq": <Faq {...props} />
    }

    return topics[match.params.topic]
}
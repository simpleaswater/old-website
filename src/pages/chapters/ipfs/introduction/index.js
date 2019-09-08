import React from 'react'
import Why_ipfs from './why_ipfs'

export default function Introduction(props) {

    const { match } = props

    const topics = {
        "why_ipfs": <Why_ipfs {...props} />,
    }

    return topics[match.params.topic]
}
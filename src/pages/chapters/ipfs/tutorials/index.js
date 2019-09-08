import React from 'react'

import Hosting from './hosting'
import Youtube from './youtube'
import Publishing from './publishing'
import ChatApp from './chatapp'

export default function Concepts(props) {

    const { match } = props

    const topics = {
        "hosting_website_on_ipfs_ipns_dnslink": <Hosting {...props} />,
        "youtube_on_ipfs": <Youtube {...props} />,
        "online_publishing_using_ipld": <Publishing {...props} />, 
        "chat_app_libp2p": <ChatApp {...props} />,
    }

    return topics[match.params.topic]
}
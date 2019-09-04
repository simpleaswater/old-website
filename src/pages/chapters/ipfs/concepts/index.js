import React from 'react'
import Bitswap from './bitswap'
import Cid from './cid'
import Dht from './dht'
import DnsLink from './dnslink'
import Hashes from './hashes'
import Ipns from './ipns'
import MerkleDag from './merkle-dag'
import Mfs from './mfs'
import Pinning from './pinning'
import Unixfs from './unixfs'

export default function Concepts(props) {

    const { match } = props

    const topics = {
        "bitswap": <Bitswap {...props} />,
        "cid": <Cid {...props} />,
        "dht": <Dht {...props} />,
        "dnslink": <DnsLink {...props} />,
        "hashes": <Hashes {...props} />,
        "ipns": <Ipns {...props} />,
        "merkle-dag": <MerkleDag {...props} />,
        "mfs": <Mfs {...props} />,
        "pinning": <Pinning />,
        "unixfs": <Unixfs {...props} />
    }

    return topics[match.params.topic]
}
import React from 'react'

import Install from './install'
import UsingIpfs from './using_ipfs'
import TransferFiles from './transfer_files'
import ReplicateDataset from './replicate_dataset'

export default function GettingStarted(props) {

    const { match } = props

    const topics = {
        "install": <Install {...props} />,
        "using_ipfs": <UsingIpfs {...props} />,
        "transfer_files": <TransferFiles {...props} />,
        "replicate_large_dataset": <ReplicateDataset {...props} />,
    }

    return topics[match.params.topic]
}
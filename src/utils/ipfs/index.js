const IPFS = require('ipfs')
var ipfs

const startIPFS = async () => {
    ipfs = await IPFS.create({
        EXPERIMENTAL: {
            pubsub: true,
            dht: true
        },
        pass: "01234567890123456789",
    })
    console.log(ipfs)
}
startIPFS()

const addToIPFS = async (data, options) => {
    let cid = await ipfs.add(data)
    return cid
}

const getKeyList = async () => {
    let keyList = await ipfs.key.list()
    return keyList
}

const generateKey = async (name, options) => {
    let newKey = await ipfs.key.gen(name, options)
    return newKey
}

export default {
    addToIPFS,
    getKeyList,
    generateKey
}



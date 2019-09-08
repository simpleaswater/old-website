const axios = require('axios');

const uploadToIPFS = async file => {
    let result = await axios.post('https://api.globalupload.io/transport/add', {
        file: file
    })
    console.log(result)
}

export default uploadToIPFS

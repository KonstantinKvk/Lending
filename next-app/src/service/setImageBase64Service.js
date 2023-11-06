const fs = require("fs")
const probe = require('probe-image-size')
const axios = require('axios')



const setImageBase64Service = async (src, width, height, resolve) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

    // console.log("body._id",src)

    let result
    try {
        let check = src.indexOf(";base64")

        if (check == -1) {
            try {

                let resultProbe = await probe(src)


                result = {
                    src: resultProbe.url,
                    width: resultProbe.width,
                    height: resultProbe.height
                }

                if (width && height) {
                    result.height = height
                    result.width = width
                }

                resolve(result)

            } catch (e) {
                console.log(e)
            }



        } else {
            const { data: result } = await axios.post("https://vrpool.ru/api/upload", { src },
                {
                    'maxContentLength': Infinity,
                    'maxBodyLength': Infinity
                }
            )

            if (result) {
                result.height = height
                result.width = width
            }


            resolve(result)
        }


    } catch (error) {
        console.log(error)
    }
}

module.exports = setImageBase64Service

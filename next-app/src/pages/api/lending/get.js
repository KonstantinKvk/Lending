const models = require('../../../models')
const mongoose = require('mongoose')

export const getData = async (id) => {

    await models.connectDB()

    const get = await models.lending.findOne({}, {
        _id: {
            "$toString": "$_id"
        },
        navbar: 1,
        banner: 1,
        contact: 1,
        experience: 1,
        servicesComp: 1,
        terms: 1,
        titleService: 1,
        footer: 1,
        navigation: 1,
        workPro: 1
    }).lean()

    let layouts = JSON.parse(JSON.stringify(get))

    return layouts
}


const layoutRoute = async (req, res) => {


    try {
        const get = await getData()
        res.json(get)
    } catch (error) {
        console.log(error)
        res.json([])
    }

}

export default layoutRoute

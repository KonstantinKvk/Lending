import { withIronSessionApiRoute } from "iron-session/next"
import { sessionOptions } from "../../../lib/session"
const setImageBase64Service = require('../../../service/setImageBase64Service')

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '200mb'
        }
    }
}

const models = require('../../../models')
const mongoose = require('mongoose')


export const getData = async (body) => {
    console.log("body432", body)

    await models.connectDB()

    try {
        if (!body._id) {
            body._id = new mongoose.mongo.ObjectID()
        }

        if (body.navbar?.logo.hasOwnProperty("src")) {
            let promise = new Promise((resolve, reject) => {
                setImageBase64Service(body.navbar.logo.src, body.navbar.logo.width, body.navbar.logo.height, resolve)
            });

            let img = await promise;

            body.navbar.logo.src = img.src
            body.navbar.logo.width = img.width
            body.navbar.logo.height = img.height
        }

        if (body.banner?.hasOwnProperty("src")) {
            let promise = new Promise((resolve, reject) => {
                setImageBase64Service(body.banner.src, body.banner.width, body.banner.height, resolve)
            });

            let img = await promise;

            body.banner.src = img.src
            body.banner.width = img.width
            body.banner.height = img.height
        }
        let newLayout = await models.lending.findOneAndUpdate({ "_id": body._id }, body, {
            new: true,
            upsert: true
        })
        await newLayout
            .save()

        return newLayout

    } catch (error) {
        console.log('error')
        console.log(error)
        return res.status(400).json({
            error,
            message: 'Email not set!',
        })
    }
}

const layoutFull = async (req, res) => {

    if (req.session.user) {

        const { body } = req


        try {
            const layoutFull = await getData(body)

            res.json({ success: true, _id: layoutFull._id })


        } catch (error) {
            res.json([])
        }
    } else {
        res.json({ isLoggedIn: false })
    }
}

export default withIronSessionApiRoute(layoutFull, sessionOptions)

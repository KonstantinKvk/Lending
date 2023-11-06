import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../../lib/session'

const models = require('../../../models')
const mongoose = require('mongoose')


export const getData = async (body) => {
    console.log("body", body)
    await models.connectDB()

    try {
        const user = await models.user.findOne({ "login": body.login, "password": body.password }, {
            _id: {
                "$toString": "$_id"
            },
            name: 1
        }).lean()
        console.log("user",user)
        let get1 = JSON.parse(JSON.stringify(user))
        return get1

    } catch (e) {
        console.log(e)
    }

}

export default withIronSessionApiRoute(async (req, res) => {
    const { body } = req
    try {
        const user = await getData(body)

        if (user) {
            req.session.user = user
            await req.session.save()
            res.status(200).end()
        } else {
            res.status(204).end()
        }


    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}, sessionOptions)
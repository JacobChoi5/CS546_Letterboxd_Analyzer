import { Router } from 'express'
const router = Router()
import * as helpers from "../helpers.js"
import * as movieData from '../data/movies.js'
import * as accountData from '../data/accounts.js'

router.route('/').get(async (req, res) => {
    try {
        res.render('home', { Title: "Home" })
    } catch (e) {
        return res.status(500).render('error', {
            errorMessage: 'Failed to render home page: ' + e,
            class: 'page-fail'
        })
    }
});

export default router
'use strict';

const router = require('express').Router()
const pricingController = require('../controllers/pricing')

router.use((req, res, next) => {
    next()
})

router.get('/', (req, res) => {
    res.render('index', {
        page_title: "Welcome",
        page_description: "A description",
        page_author: "First Renaniasance Assoicates"
    })
})

router.get('/features', (req, res) => {
    res.render('features', {
        page_title: "Feature Tour",
        page_description: "DigIT is a simple online bookkeep and HR software for busy teams, agencies, fast-growing startups and small businesses everywhere.",
        page_author: "First Renaniasance Assoicates"
    })
})

router.get('/pricing', pricingController.index)

router.get('/contact', (req, res) => {
    res.render('contact', {
        page_title: "Contact Us",
        page_description: "Get in touch with us",
        page_author: "First Renaniasance Assoicates"
    })
})

module.exports = router
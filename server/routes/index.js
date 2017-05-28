'use strict';

const router = require('express').Router()

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
        page_description: "DigIT Features",
        page_author: "First Renaniasance Assoicates"
    })
})
module.exports = router
'use strict';

const router = require('express').Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.render('index', {
        page_title: "Welcome",
        page_description: "A description",
        page_author: "First Renaniasance Assoicates"
    })
})

module.exports = router
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

router.get('/about', (req, res) => {
    res.render('about', {
        page_title: "About Bridgebooks",
        page_description: "Bridgebooks is a simple accounting and payroll solution that helps individuals and businesses manage their cash flow. ",
        page_author: "First Renaniasance Assoicates"
    })
})

router.get('/features', (req, res) => {
    res.render('features', {
        page_title: "Feature Tour",
        page_description: "Bridgebooks is a simple online bookkeeping and HR software for busy teams, agencies, fast-growing startups and small businesses everywhere.",
        page_author: "First Renaniasance Assoicates"
    })
})

router.get('/features/invoicing', (req, res) => {
    res.render('features/invoicing', {
        page_title: "Invoicing & Payments",
        page_description: "Bridgebooks is a simple online bookkeep and HR software for busy teams, agencies, fast-growing startups and small businesses everywhere.",
        page_author: "First Renaniasance Assoicates"
    })
})

router.get('/features/invoicing/invoices', (req, res) => {
    res.render('features/invoicing', {
        page_title: "Invoicing & Payments",
        page_description: "Bridgebooks is a simple online bookkeeping and HR software for busy teams, agencies, fast-growing startups and small businesses everywhere.",
        page_author: "First Renaniasance Assoicates"
    })
})

router.get('/features/invoicing/payments', (req, res) => {
    res.render('features/invoicing-payments', {
        page_title: "Invoicing & Payments",
        page_description: "Bridgebooks is a simple online bookkeeping and HR software for busy teams, agencies, fast-growing startups and small businesses everywhere.",
        page_author: "First Renaniasance Assoicates"
    })
})

router.get('/features/invoicing/acl', (req, res) => {
    res.render('features/invoicing-acl', {
        page_title: "Invoicing & Payments",
        page_description: "Bridgebooks is a simple online bookkeeping and HR software for busy teams, agencies, fast-growing startups and small businesses everywhere.",
        page_author: "First Renaniasance Assoicates"
    })
})

router.get('/features/payroll', (req, res) => {
    res.render('features/payroll', {
        page_title: "Payroll",
        page_description: "Bridgebooks is a simple online bookkeep and HR software for busy teams, agencies, fast-growing startups and small businesses everywhere.",
        page_author: "First Renaniasance Assoicates"
    })
})

router.get('/features/payroll/employees', (req, res) => {
    res.render('features/payroll-employees', {
        page_title: "Payroll",
        page_description: "Bridgebooks is a simple online bookkeep and HR software for busy teams, agencies, fast-growing startups and small businesses everywhere.",
        page_author: "First Renaniasance Assoicates"
    })
})

router.get('/features/payroll/runs', (req, res) => {
    res.render('features/payroll-runs', {
        page_title: "Payroll",
        page_description: "Bridgebooks is a simple online bookkeep and HR software for busy teams, agencies, fast-growing startups and small businesses everywhere.",
        page_author: "First Renaniasance Assoicates"
    })
})

router.get('/pricing', pricingController.index)

router.get('/faqs', (req, res) => {
    res.render('faqs', {
        page_title: "Frequently Asked Questions",
        page_description: "Gey answers to yout frequently asked questions about Bridgebooks",
        page_author: "First Renaniasance Assoicates"
    })
});

router.get('/contact', (req, res) => {
    res.render('contact', {
        page_title: "Contact Us",
        page_description: "Get in touch with us",
        page_author: "First Renaniasance Assoicates"
    })
})

module.exports = router
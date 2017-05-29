'use strict'

module.exports = {
    index: (req, res) => {

        res.render('pricing', {
            page_title: "Pricing",
            page_description: "Start using DigIT today with a free 15-day trial, and pick your plan later.",
            page_author: "First Renaniasance Assoicates"
        })
    }
}
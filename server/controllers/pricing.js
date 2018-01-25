'use strict'

module.exports = {
    index: (req, res) => {

        res.render('pricing', {
            page_title: "Pricing",
            page_description: "Start using Bridgebooks today with a free 30-day trial, and pick your plan later.",
            page_author: "First Renaniasance Assoicates"
        })
    }
}
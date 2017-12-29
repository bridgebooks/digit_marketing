'use strict';
var apiCall = require('./utils/api.js');

startProcess();

function startProcess() {
    var distributionId;
    var mailingListId;
    var distributionArray = [];
    var linkDistributionArray = [];
    var contactList =[];

    var listDistributions = apiCall.listDistribution('SV_eW1xaqcvL4iAQxn');

    listDistributions
        .then(function (distributions) { 
            distributions.elements.forEach(function (distribution) {
                distributionArray.push(distribution.id);
                // get distribution
                apiCall.getDistribution(distribution.id, 'SV_8e6ZUSHkE4iD4G1')
                    .then(function ($distribution) {
                        apiCall.listContacts($distribution.recipients.mailingListId)
                            .then(function (contacts) {
                                contacts.forEach(function (contact) {
                                    contactList.push(contact.elements);
                                })
                            })
                    })
                
                console.log('contactList', contactList);
            })
        })
}
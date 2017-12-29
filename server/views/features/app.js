'use strict';
var apiCall = require('./utils/api.js');

startProcess();

function startProcess() {
    var distributionId;
    var mailingListId;
    var distributionArray = [];
    var linkDistributionArray = [];
    var contactList =[];

    // List Distribution Api to get Distribution Ids
    apiCall.listDistribution('SV_eW1xaqcvL4iAQxn').then(function (listDistribution) {
        for (var j = 0; j < listDistribution.elements.length; j++) {
            console.log(listDistribution.elements[j].id)
            distributionId = listDistribution.elements[j].id;
            distributionArray.push(distributionId);
            apiCall.getDistribution(distributionId, 'SV_8e6ZUSHkE4iD4G1')
                .then(function (getDistribution) {
                    mailingListId = getDistribution.recipients.mailingListId;
                    console.log("mailing list Id" + mailingListId)
                    //List Contacts
                   
                    apiCall.listContacts(mailingListId).then(function (listContacts) {
                        console.log(listDistribution.elements.length)

                        for (var l = 0; l < listDistribution.elements.length; l++) {
                            contactList.push(listDistribution.elements[l]); 
                        }
                        console.log("contactList--"+contactList);
                    });
                });

        }
        console.log("contactList11--"+contactList);
        if (distributionArray.length > 0) {
            for (var k = 0; k < distributionArray.length; k++) {
                console.log("DisArray" + distributionArray[k]);

                apiCall.listDistributionLinks(distributionArray[k], 'SV_8e6ZUSHkE4iD4G1')
                    .then(function (listDistributionLinks) {
                        for (var i = 0; i < listDistributionLinks.elements.length; i++) {
                            console.log("listDistributionLinks@@ " + listDistributionLinks.elements[i].contactId);
                            console.log("listDistributionLinks@@ " + listDistributionLinks.elements[i].link);
                            linkDistributionArray.push({
                                id: listDistributionLinks.elements[i].contactId,
                                link: listDistributionLinks.elements[i].link
                            })
                        }

                    });
            }

        }
        console.log(linkDistributionArray);
        
    });


}


//console.log(msg.SimpleMessage);
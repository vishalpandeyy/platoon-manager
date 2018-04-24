var FcmAdmin = require('../shared/cloud-messaging')

var message = require('../shared/messsages')

module.exports = function(config) {

    let { notification, data } = config 

    var destinationDeviceToken = 'c0I7DGolu5I:APA91bHnA2ya4ZC8xfhI2V45xOMdstfXpUkmXoI4o1YC8BAq6uPG7hrqTjL16Vdwt5on6kPM6wQNglZrN-n76eObzpfR9G_DroBKePnFWJf18okJumChVlFuzBQfSIB2tncnS50gab1i'
   
        var payload = {
            notification,
            data
        };

        var options = {
            priority: "high",
            timeToLive: 60 * 60 *24
        };

        FcmAdmin.messaging().sendToDevice(destinationDeviceToken, payload, options)
                .then(function(response) {
                    console.log("Successfully sent message:", response.results);
                })
                .catch(function(error) {
                        console.log("Error sending message:", error);
                });

        var sendMessageToOneDevice = (destinationDeviceToken, payload, options) => {
            FcmAdmin.messaging().sendToDevice(destinationDeviceToken, payload, options)
                .then(function(response) {
                    console.log("Successfully sent message:", response);
                })
                .catch(function(error) {
                        console.log("Error sending message:", error);
                });
        }

        var sendRequestToLead = () => {

        }

        var notifyPlatoon = (vehicles) => {
            vehicles.forEach(v => {
                sendMessageToOneDevice(v.firebaseInstanceId, message.SYNC_RECEIVED)
            });
        }

}
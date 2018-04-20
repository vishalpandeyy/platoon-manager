var FcmAdmin = require('../shared/cloud-messaging')

var message = require('../shared/messsages')

module.exports = function(config) {

    let { notification, data } = config 

    var destinationDeviceToken = 'ebI_HaSVMtU:APA91bG1BQQp7kgQ_8GAgrssZtW_wUsn6VGJnjxoH5mk4efWZYa_yeqEJ_kOfFZDYW4XaqVTlfwQMUdwbxj1GKkS7bdi82NEUZ-0Sjprb84tG6M-T_tA9X14ADSr4S-sdSQWZHXptuvg'
   
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
                    console.log("Successfully sent message:", response);
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
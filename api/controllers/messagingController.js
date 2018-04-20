var FcmAdmin = require('../shared/cloud-messaging')

var message = require('../shared/messsages')

module.exports = function(config) {

    let { notification, data } = config 

    var destinationDeviceToken = 'c8mUOSzJgvY:APA91bEl-fKpbu6YesiEey6STmOM5oB6E4EphuuSiOUNLwBOA2ZPTQnsCXcEu_uEgmjAX9VR1H1BATfPnfI602-xMFD_Xj7S2lGLF6lKW7GP4Hvn7vGj0PFwzsRxIEWH91b0TchHoepQ'
   
        var payload = {
            notification,
            data
        };

        var options = {
            priority: "high",
            timeToLive: 60 * 60 *24
        };

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
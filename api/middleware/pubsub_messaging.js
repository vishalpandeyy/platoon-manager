var admin = require('../shared/cloud-messaging')

var message = require('../shared/messsages')

function subscribe(token, topic, next) {

    admin.messaging().subscribeToTopic(token, topic)
        .then(function (response) {
            console.log(response.results);
            
            console.log("Successfully subscribed to topic:", topic);
            //next()
        })
        .catch(function (error) {
            console.log("Error subscribing to topic:", error);
            //next()
        });
}

function unsubscribe(token, topic, next) {

    admin.messaging().unsubscribeFromTopic(token, topic)
        .then(function (response) {
            console.log("Successfully unsubscribed from topic:", topic);
            //next()
        })
        .catch(function (error) {
            console.log("Error unsubscribing from topic:", error);
            //next()
        });
}

module.exports = function (req, res, next) {

    if (req.body.requestType) {
        var token = req.body.vehicle.firebaseInstanceId    
        switch (parseInt(req.body.requestType)) {

            case message.REQUEST_JOIN.code:
                res.subscriptions = ['platoon_expanding','platoon_shrinking', 'platoon_alert', 'platoon_sync']

                subscribe(token, 'platoon_expanding')
                subscribe(token, 'platoon_shrinking')
                subscribe(token, 'platoon_alert')
                subscribe(token, 'platoon_sync')
                console.log('subscribing to topics');
                next()
                break;

            case message.FAILURE_ALERT.code:
                next()
                break;

            case message.REQUEST_EXIT.code:
                unsubscribe(token, 'platoon_expanding')
                unsubscribe(token, 'platoon_shrinking')
                unsubscribe(token, 'platoon_alert')
                unsubscribe(token, 'platoon_sync')
                next()
                break;

            case message.SYNC_RECEIVED.code:
                next()
                break;

            case message.VEHICLE_EXITED.code:
                next()
                break;

            case message.VEHICLE_JOINED.code:
                next()
                break;

            default:
                next()
        }
    } else {
        next()
    }
}
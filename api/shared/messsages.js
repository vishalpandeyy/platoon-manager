var messageTypes = {
    
    FAILURE_ALERT: {code: 0, text: "failure occured"},
    REQUEST_JOIN: {code: 1, text: "join requested"},
    REQUEST_EXIT: {code: 2, text: "exit requested"},
    SYNC_RECEIVED: {code: 3, text: "platoon configuration update received" },
    VEHICLE_JOINED: {code: 4, text: "a new vehicle has joined the platoon"},
    VEHICLE_EXITED: {code: 5, text: "a vehicle has taken an exit from the platoon"}

}

module.exports = messageTypes
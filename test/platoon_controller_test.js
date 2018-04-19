var platoonController = require('../api/controllers/platoonController')

// tests for all the platoon controller functions
describe('Platoon manager', () => {
    
    describe('Create a platoon', () => {
        it('should save a platoon in the database')
    })

    describe('Update platoon on a new vehicle joining', () => {
        it('should increment vehicle count of the platoon in the database')
    })

    describe('Update a platoon on a vehicle exiting a platoon', () => {
        it('should decrement vehicle count of a platoon in the database')
    })

    describe('Find platoons near a geolocation', () => {
        it('should return platoons nearby a specified geolocation from the database')
    })

    describe('Find if a platoon is full and cannot be joined', () => {
        it('should flag the response with platoon: isfull')
    })

    describe('Sync Platoon dynamics', () => {
        
        it('should notify all platoon vehicles of a change in speed')

        it('should notify all platoon vehicles of a change in safe distance')

        it('should notify all platoon vehicles for a vehicle exiting or joining the platoon')

    })

    describe('Handle failures based on sensor information', () => {
        it('should notify all vehicles of a possible fault in the system',)

        it('should notify all vehicles of a possible fault in the system')
    })  
})

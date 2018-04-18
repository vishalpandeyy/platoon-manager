'use strict';
module.exports = function(app) {
  var platoonManager = require('../controllers/platoonController');

  // todoList Routes
  app.route('/platoons')
    .get(platoonManager.list_all_platoons)
    .post(platoonManager.create_a_platoon);

  app.route('/platoon/:platoonId')
    .get(platoonManager.read_a_platoon)
    .put(platoonManager.update_a_platoon)
    .delete(platoonManager.delete_a_platoon);

  app.route('/platoons/nearby')
    .post(platoonManager.nearbyPlatoons)
};
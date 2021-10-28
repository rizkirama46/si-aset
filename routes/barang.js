'use strict'

module.exports = function(app) {
  const controller = require('../controllers/barang')

  app.route('/').get(controller.index)
}
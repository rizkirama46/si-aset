'use strict'

module.exports = function(app) {
  const barang = require('../controllers/barang')

  app.route('/').get(barang.index)
}
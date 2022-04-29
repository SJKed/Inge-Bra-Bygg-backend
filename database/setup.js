const db = require('./connection')
require('../models')()

db.sync()
const express = require('express');
const router = express.Router();

const reqHandler = require('./functions/RequestsHandler')

router.use('/funcs', reqHandler);

module.exports = router;
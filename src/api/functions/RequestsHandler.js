const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/request/:URL', (res, req) => {
    axios.get(req.params.URL)
})

module.exports = router;
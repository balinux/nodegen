const express = require('express');
const router = express.Router();
const mainApiController = require('../../app/controller/mainApiController');
// const mainApiController = require('@app/controller/mainApiController');

router.get('/', (req, res) => {
    res.json({ firstName: 'Tobi' });
})

router.get('/posts', mainApiController.posts);
module.exports = router;
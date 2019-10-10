const express = require('express');
const mainController = require("../app/controller/mainController");
const router = express.Router();

router.use('/api', require("./api/v1"));

router.get('/', (req, res) => {
    res.send('integrated with CI/CD baru')
})
router.get('/route-with-controller', mainController.showEvent);

module.exports = router;
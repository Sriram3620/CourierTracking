const express = require('express');
const router = express.Router();
const trackingController = require('../controllers/trackingController');

router.get('/:trackingNumber', trackingController.getTrackingInfo);

module.exports = router;

const Tracking = require('../models/Tracking');

exports.getTrackingInfo = async (req, res) => {
  const { trackingNumber } = req.params;

  try {
    const trackingInfo = await Tracking.findOne({ trackingNumber });
    res.json(trackingInfo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

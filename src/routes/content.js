const router = require('express').Router();

const { contentController } = require('../controllers');

router.route('/save')
  .post(contentController.createContentType);

router.route('/update')
  .post(contentController.updateContentType);

module.exports = router;

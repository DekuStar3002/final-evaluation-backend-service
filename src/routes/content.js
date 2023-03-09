const router = require('express').Router();

const { contentController } = require('../controllers');

router.route('/save')
  .post(contentController.createContentType);

router.route('/update')
  .post(contentController.updateContentType);

router.route('/field')
  .post(contentController.addFeatureToContentType)
  .patch(contentController.editFeatureNameOfContentType);

module.exports = router;

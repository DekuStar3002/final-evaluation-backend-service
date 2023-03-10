const router = require('express').Router();

const { contentController } = require('../controllers');

router.route('/save')
  .post(contentController.createContentType);

router.route('/update')
  .post(contentController.updateContentType);

router.route('/field')
  .post(contentController.addFeatureToContentType)
  .patch(contentController.editFeatureNameOfContentType)
  .delete(contentController.deleteFieldOfContentType);

router.route('/all')
  .get(contentController.getAllContentType);

router.route('/id')
  .post(contentController.getContentTypeById);

module.exports = router;

const router = require('express').Router();

const { collectionController } = require('../controllers');

router.route('/add')
  .post(collectionController.addContentToCollection);

router.route('/edit')
  .put(collectionController.editContentOfCollection);

router.route('/delete')
  .delete(collectionController.deleteContentOfCollection);

router.route('/all')
  .get(collectionController.allCollections);

router.route('/content')
  .post(collectionController.getContantOfCollection);
module.exports = router;
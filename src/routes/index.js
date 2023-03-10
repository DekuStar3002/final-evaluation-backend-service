const router = require('express').Router();

const contentRouter = require('./content');
const collectionRouter = require('./collection');

router.use('/content', contentRouter);
router.use('/collection', collectionRouter);

module.exports = router;
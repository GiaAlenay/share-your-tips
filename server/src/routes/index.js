const { Router } = require('express');
const User=require('./user')
const Post=require('./post')

const router = Router();
router.use('/users',User)
router.use('/posts',Post)

module.exports = router;
const {Router} =require('express')
const {getPosts,getPost,updatePost,deletePost,createPost}=require('../controllers/post')

const router=Router()

router.get('/',getPosts)
router.post('/',createPost)
router.get('/:id',getPost)
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)

module.exports=router;
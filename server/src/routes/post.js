const {Router} =require('express')
const {getPosts,getPost,updatePost,deletePost,createPost}=require('../controllers/post')

const router=Router()

router.get('/',getPosts)
router.get('/:id',getPost)
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)
router.post('/user/:idUser',createPost)

module.exports=router;
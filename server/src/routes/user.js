const {Router}=require('express')
const { getUser,
        getUsers,
        updateUSer,
        getUsernames,
        createUSer,
        deleteUSer,
        getEmails}=require('../controllers/user')
const router=Router()

router.get('/',getUsers)
router.post('/',createUSer)
router.patch('/:id',updateUSer)
router.delete('/:id', deleteUSer)
router.get('/:id',getUser)
router.get('/usernames',getUsernames)
router.get('/emails',getEmails)


module.exports=router;
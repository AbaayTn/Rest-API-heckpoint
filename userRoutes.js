const router=require('express').Router()
const userController=require('./userController')

router.get('/get',userController.getUser)
router.post('/add',userController.addUser)
router.post('/update',userController.updateUser)
router.post('/delete',userController.deleteUser)

module.exports=router
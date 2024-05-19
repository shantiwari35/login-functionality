const express = require('express');
const router = express.Router();
const verifyToken=require('../middleware/verifyToken')
const userController=require('../Controller/userController');


router.post('/', userController.createUser);
router.get('/',verifyToken, userController.getAllUser);
router.get('/:id',verifyToken, userController.getUserById);
router.put('/:id',verifyToken, userController.updateUser);
router.delete('/:id',verifyToken, userController.deleteUser);

module.exports = router;
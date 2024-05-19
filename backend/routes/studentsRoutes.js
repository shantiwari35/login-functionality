const express = require('express');
const router = express.Router();
const verifyToken=require('../middleware/verifyToken')
const studentController=require('../Controller/studentController');


router.post('/',verifyToken, studentController.createStudent);
router.get('/',verifyToken, studentController.getAllStudents);
router.get('/:id',verifyToken, studentController.getStudentById);
router.put('/:id',verifyToken, studentController.updateStudent);
router.delete('/:id',verifyToken, studentController.deleteStudent);

module.exports = router;
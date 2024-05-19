const Student = require('../models/studentModel');


const createStudent = async (req, res) => {
    console.log(req)
    try {
        const { name, age, email } = req.body;
        const student = new Student({ name, age, email });

        await student.save();
        res.status(201).send('student added successfully');
    } catch (error) {

        console.error('Error creating Student: ', error);
        res.status(500).send('Internal Server Error');
    }
};

// Get all students
const getAllStudents = async (req, res) => {
    try {
        console.log(req)
        const students = await Student.find();
        const totalCount = await Student.find().countDocuments();
        console.log(students)
        res.send({ statusCode: 200, data: students, message: 'successful', totalCount: totalCount });
    } catch (error) {
        console.error('Error getting students:', error);
        res.status(500).send({ statusCode: 500, message: 'Internal Server Error' });

    }
};

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const getSingleStudent = await Student.findById(id);
        if (getSingleStudent)
            res.send({ statusCode: 200, data: getSingleStudent, message: 'Student found!' });
        else
            res.send({ statusCode: 204, data: {}, message: 'Student not found!' });

    } catch (error) {
        console.error('Error getting students:', error);
        res.send({ statusCode: 500, message: 'Internal Server Error' });

    }

}

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, email } = req.body;
        await Student.findByIdAndUpdate(id, { name, age, email });
        res.send({ statusCode: 200, message: 'Student Updated successfully' });

    } catch (error) {
        console.error('Error getting students:', error);
        res.send({ statusCode: 500, message: 'Internal Server Error' });
    }

}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
       
        await Student.findByIdAndDelete(id);
        res.send({ statusCode: 200, message: 'Student deleted successfully' });

    } catch (error) {
        console.error('Error getting students:', error);
        res.send({ statusCode: 500, message: 'Internal Server Error' });
    }

}
module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
}
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, require: true },
    age: { type: Number, require: true },
    email: { type: String, require: true },
}, { collection: 'student' });

studentSchema.set('toJSON', {
  virtuals: true
});
const Student = mongoose.model('student', studentSchema);

module.exports = Student;
const mongoose = require("mongoose");
const config = {
    autoIndex: true,
    useNewUrlParser: true,
};
const connectionString = process.env.MONGODB_CONNECTION;
// console.log(connectionString);

mongoose.connect(connectionString, config)
.then(() => console.log('Connected to MongoDB ...'))
.catch(err => console.log('Cannot connect to MongoDB : ', err));

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    classRoom: String,
    skills: [String],
    occupation: String,
    isStudying: {type:Boolean, default:true},
    score: {type:Number, default:0}
});

const Student = mongoose.model('students', studentSchema);

async function updateStudentById(id) {
    const student = await Student
    .findById(id);
    if (!student) {
        return
    } else {
        student.score = 99;
        student.name = "Test(Updated)";
        student.save();
    }
}

// updateStudentById("6054d1521cc80e15bb8199b1");

async function updateStudentByName(name) {
    const student = await Student
    .findOne({name: name});
    if (!student) {
        return
    } else {
        student.score = 100
        student.save();
    }
}

// updateStudentByName("Test");

async function updateStudentAndShow(id) {
    const student = await Student.findById(id)
    console.log(student);

    if (!student) {
        return
    } else {
        student.score = 88;
        const updatedStudent = await student.save();
        console.log(updatedStudent);
    }
}

updateStudentAndShow("6054d1521cc80e15bb8199b1");
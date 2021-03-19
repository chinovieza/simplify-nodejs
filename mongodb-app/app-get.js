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

async function getAllStudents() {
    const data = await Student.find();
    console.log(data);
}

async function getStudentByID(id) {
    const data = await Student.findById(id);
    console.log(data);
}

getAllStudents();
// getStudentByID("6054d1521cc80e15bb8199b1");


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

async function createStudent() {

    // const student = Student({
    //     name: "Sabo",
    //     age: 20,
    //     classRoom: "6/2",
    //     occupation: "Revolutionary Army"
    // });

    const student = Student({
        name: "Tony Tony Chopper",
        age: 18,
        classRoom: "6/1",
        skills: ["Medical"],
        occupation: "Doctor",
        score: 98
    });

    const data = await student.save();
    console.log(data);

}

// createStudent();

// const student = Student({
//     name: "Nico Robin",
//     age: 30,
//     classRoom: "6/1",
//     occupation: "Archaeologist",
//     score: 89
// });
// student.save()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const createStudent2 = async () => {
    const student = Student({
        name: "Franky",
        age: 36,
        classRoom: "6/1",
        occupation: "Shipwright"
    });
    const data = await student.save();
    console.log(data);
} 

// createStudent2();


//------ GET --------//

async function getAllStudents() {
    const data = await Student.find();
    console.log('-> Get all students <-');
    console.log(data);
}

async function getStudentsByCondition(condition) {
    const data = await Student.find(condition);
    console.log('-> Get all students by condtion <-');
    console.log(data);
}

async function getSortAgeStudent() {
    const data = await Student
    .find({classRoom:"6/1"})
    .sort({age: -1});
    console.log('-> Get sort age students  <-');
    console.log(data);
}

async function getSortAgeLimitStudent() {
    const data = await Student
    .find({classRoom:"6/1"})
    .sort({age: 1})
    .limit(2);
    console.log('-> Get sort age limit students  <-');
    console.log(data);
}

getAllStudents();
const q1 = {classRoom:"6/1"};
getStudentsByCondition(q1);
const q2 = {classRoom:"6/1", skills:"Sword"};
getStudentsByCondition(q2);
getSortAgeStudent();
getSortAgeLimitStudent();

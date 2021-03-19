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

async function getSelectFieldStudent() {
    const data = await Student
    .find()
    .select({name:1, classRoom:1});
    console.log('-> Get select field students  <-');
    console.log(data);
}

async function getUnSelectFieldStudent() {
    const data = await Student
    .find()
    .select({isStudying:0, score:0, classRoom:0, age:0});
    console.log('-> Get unselect field students  <-');
    console.log(data);
}

async function getGte80Student() {
    const data = await Student
    .find({score:{$gte:80}})
    console.log('-> Get >= 80 students  <-');
    console.log(data);
}

async function getGt70Lt80Student() {
    const data = await Student
    .find({score:{$gt:70, $lt:80}})
    console.log('-> Get > 70 , < 80 students  <-');
    console.log(data);
}

async function getIn70_80_90Student() {
    const data = await Student
    .find({score:{$in:[70,80,90]}})
    console.log('-> Get in 70,80,90 students  <-');
    console.log(data);
}

async function get61AndScoreGt90Student() {
    const data = await Student
    .find()
    .and([{classRoom:"6/1"}, {score:{$gt:90}}]);
    console.log('-> Get students on 6/1 and score > 90 <-');
    console.log(data);
}

async function get62Or63Student() {
    const data = await Student
    .find()
    .or([{classRoom:"6/2"}, {classRoom:"6/3"}]);
    console.log('-> Get class 6/2 or 6/3 student <-');
    console.log(data);
}

async function getNameStartWithSStudent() {
    const data = await Student
    .find({name: /^S/i}); // "^s" Start with S and "i" not case sensitive
    console.log('-> Get student that name start with S <-');
    console.log(data);
}

async function getNamEndWithPerStudent() {
    const data = await Student
    .find({name: /per$/}); // end with "per"
    console.log('-> Get student that name end with per <-');
    console.log(data);
}

getAllStudents();
const q1 = {classRoom:"6/1"};
getStudentsByCondition(q1);
const q2 = {classRoom:"6/1", skills:"Sword"};
getStudentsByCondition(q2);
getSortAgeStudent();
getSortAgeLimitStudent();
getSelectFieldStudent();
getUnSelectFieldStudent();
getGte80Student();
getGt70Lt80Student();
getIn70_80_90Student();
get61AndScoreGt90Student();
get62Or63Student();
getNameStartWithSStudent();
getNamEndWithPerStudent();
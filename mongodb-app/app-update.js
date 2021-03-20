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

// updateStudentAndShow("6054d1521cc80e15bb8199b1");

async function updateStudentUpdateOne1(id) {
    const data = await Student
    .updateOne({_id: id}, {
        $set: {score: 80}
    });
    console.log(data)
}

// updateStudentUpdateOne1("6054d1521cc80e15bb8199b1");
// updateStudentUpdateOne1("6054d16d5dea3715c7f81be5");

async function updateStudentUpdateMany1(classRoom) {
    const data = await Student
    .updateMany({classRoom: classRoom}, {
        $set: {
            classRoom: "8/1",
            isStudying: false
        }
    });
    console.log(data);
}

// updateStudentUpdateMany1("7/1");

async function updateStudentUpdateManyMul(classRoom) {
    const data = await Student
    .updateMany({classRoom: classRoom}, {
        $mul: {score: 0.8} //decrease score to 80%
    });
    console.log(data);
}

// updateStudentUpdateManyMul("8/1");

async function updateStudentUpdateManyMax(classRoom) {
    const data = await Student
    .updateMany({classRoom: classRoom}, {
        $max: {score: 50}
    });
    console.log(data);
}

// updateStudentUpdateManyMax("8/1");

async function updateStudentFindOneAndUpdate(id) {
    const data = await Student
    .findOneAndUpdate(
        {_id: id},
        {$set: {score: 100}},
        {new: true},
        function (err, doc) {
            //something here
            console.log("say something");
        }
    );
    console.log(data);
}

// updateStudentFindOneAndUpdate("6054d1521cc80e15bb8199b1");
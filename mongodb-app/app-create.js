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

const student = Student({
    name: "Test",
    age: 30,
    classRoom: "6/1",
    occupation: "Archaeologist",
    score: 89
});

student.save()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
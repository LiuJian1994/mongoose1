const connect_db = require('./dbConnection')
const Students = require('./models/studentModel')

async function getStudent(){
    const student1 = await Students.find();
    console.log(`get${student1}`)
}
getStudent;
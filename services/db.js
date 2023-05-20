const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/ems')

//model creation 

const Employee=mongoose.model('Employee',
    {
        id:String,
        name:String,
        designation:String,
        salary:Number,
        experience:Number

    })
module.exports={
    Employee
}

import mongoose from "mongoose";
new mongoose.Schema = ({
    fName:{type: String, require: true},
    lName:{type: String, require: true},
    email:{type: String, require: true},
    moile:{type: String, require: true},
    password:{type: String, require: true},
    isAdmin:{type: Boolean, require: true, default: false}
})
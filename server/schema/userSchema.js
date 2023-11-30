import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment-plugin';

const UserSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String,
    phonenumber:String
})

// autoIncrement.initialize(mongoose.connection);
// UserSchema.plugin(
//   autoIncrement.plugin(),
//   {
//     model: "UserSchema",
//     startAt: 1,
//     incrementBy: 1,
//   },
//   "user"
// );
 
const User = mongoose.model('user', UserSchema)

export default User
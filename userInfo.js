const mongoose = require("mongoose");

//Create a schema to define the contents of our user data in Json format
const UserData = new mongoose.Schema(
    {
        username: String,
        email: {type:String, unique: true},
        password: String
    } ,
    {
    collection: "User",
    }
)

mongoose.model("User", UserData);
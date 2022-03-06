import validator from "validator";
import mongoose from "mongoose";


    const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    article:{
        type: String,
        required: true
    },
    authorId:{
        type: String,
        // required: true
    },
    createdAt:{
        type: String,
        // required: true
    },
    author:{
        type: String,
        // required: true
    },

    
    
  

})
//let article = module.exports= mo.model('Article',artSchma);
const blog = mongoose.model("Blog", blogSchema);
export default blog;
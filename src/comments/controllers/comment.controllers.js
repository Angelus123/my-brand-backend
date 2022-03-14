import Comment from '../models/comment.models.js';
const homepage = (req, res) => res.json({ message: "request recieved" });
const addComment = async (req,res,next)=>{
 let commentInfo= {};
 commentInfo.comment=req.body.comment;
 commentInfo.articleId=req.body.articleId;
 commentInfo.authorId=req.user.id;
 commentInfo.createdAt=new Date().toISOString();
 const comments = await Comment.create(commentInfo);
  res.status(201).json({
      status:'success',
      createdOn:req.requestTime,
      data:{
        comments
      }
  })
}
 
const getComments = async (req,res,next)=>{
  req.requestTime  =new Date().toISOString();
  const comments = await Comment.find();
  res.status(200).json({
    status:'success',
    data:{
        comments
    }
  })
}


const getComment = async (req,res,next)=>{

  const comment= await Comment.findById(req.params.id)
  console.log(comment) 
  res.status(200).json({
      status:'success',
      data:{
        comment
      }
    })
}


const deleteComment = async (req,res,next)=>{
  await comment.findByIdAndDelete(req.params.id)
  res.status(200).json({
      status:'success',
      data:{}
    })
}

const updateComment = async (req,res,next)=>{
    const comment=await Comment.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidator:true
    })
    res.status(200).json({
        success:true,
        data: comment
    })

}
export {homepage, getComments, getComment, updateComment, addComment, deleteComment}

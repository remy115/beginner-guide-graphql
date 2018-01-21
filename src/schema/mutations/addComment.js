const {fakeDatabase}=require('../../FakeDatabase');
const {Comment, CommentInputType}=require('../types/Comment');
module.exports={
    addComment:{
        type:Comment,
        description:"Creates a new post comment",
        args:{
            comment:{type:CommentInputType}
        },
        resolve:(parent,{comment})=>{
            return fakeDatabase.addNewComment(comment);
        }
    }
}
const {fakeDatabase}=require('../../FakeDatabase');
const {Post, PostInputType}=require('../types/Post');
module.exports={
    addPost:{
        type:Post,
        description:"Creates a new Blog Post",
        args:{
            post:{type:PostInputType}
        },
        resolve:(parent,{post})=>{
            return fakeDatabase.addNewBlogPost(post);
        }
    }
}
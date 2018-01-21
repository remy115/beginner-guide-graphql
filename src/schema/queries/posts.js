const {GraphQLList}=require('graphql');
const {fakeDatabase}=require('../../FakeDatabase');
const {Post}=require('../types/Post');

module.exports={
    posts:{
        type:new GraphQLList(Post),
        description:"get list of recent blog posts",
        args:{},
        resolve:()=>{
            return fakeDatabase.getBlogPosts()
        }
    }
}
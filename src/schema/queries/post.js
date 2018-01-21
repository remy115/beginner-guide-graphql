const {GraphQLInt,GraphQLNonNull}=require('graphql');
const {fakeDatabase}=require('../../FakeDatabase');
const {Post}=require('../types/Post');
module.exports={
    post:{
        type:Post,
        description:"Get an especific blog post",
        args:{
            postId:{
                type: new GraphQLNonNull(GraphQLInt)
            }
        },
        resolve:(parent,args)=>{
            return fakeDatabase.getPost(args.id)
        }
    }
}
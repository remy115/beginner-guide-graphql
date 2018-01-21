const {GraphQLString,GraphQLNonNull}=require('graphql');
const {fakeDatabase}=require('../../FakeDatabase');
const {Author}=require('../types/Author');
module.exports={
    author:{
        type:Author,
        args:{
            id:{
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve:(parent,args)=>{
            return fakeDatabase.getAuthor(args.id)
            // return {}
        }
    }
}
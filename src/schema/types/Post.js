const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLInputObjectType, GraphQLNonNull}=require('graphql');
const {Author,Post}=require('./Author');
const {Comment}=require('./Comment');
const {fakeDatabase}=require('../../FakeDatabase');


/* const Post=new GraphQLObjectType({
    name:"Post",
    description:"Details of a post",
    fields:()=>({
        id:{type:GraphQLInt},
        title:{type:GraphQLString},
        content:{type:GraphQLString},
        author:{
            type:Author,
            resolve:(post)=>{
                return fakeDatabase.getAuthor(post.author)
            }
        },
        comment:{
            type:new GraphQLList(Comment),
            resolve:(post)=>{
                return fakeDatabase.getCommentsForPost(post.id);
            }
        }
    })
}); */


const PostInputType=exports.PostInputType=new GraphQLInputObjectType({
    name:"PostInput",
    fields:{
        title:{type: new GraphQLNonNull(GraphQLString)},
        content:{type: new GraphQLNonNull(GraphQLString)},
        author:{type: new GraphQLNonNull(GraphQLString)}
    }
});

module.exports={Post, PostInputType}
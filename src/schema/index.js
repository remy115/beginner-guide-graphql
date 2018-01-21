const {GraphQLSchema, GraphQLObjectType} =require('graphql');
const posts =require('./queries/posts');
const post =require('./queries/post');
const author =require('./queries/author');


const {addPost} =require('./mutations/addPost');
const {addComment} =require('./mutations/addComment');

const schema = new GraphQLSchema({
    query:new GraphQLObjectType({
        name:'Rootquery22',
        fields:()=>Object.assign({},posts,post,author)
        // fields:()=>author
    })/* ,
    mutation:new GraphQLObjectType({
        name:'RootMutation',
        fileds:()=>Object.assign({},addPost,addComment)
    }) */
})

module.exports=schema;
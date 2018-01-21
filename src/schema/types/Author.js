const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList}=require('graphql');
const {Comment}=require('./Comment');



const {fakeDatabase}=require('../../FakeDatabase');
// console.log('fakeDatabase',fakeDatabase);


const Post=new GraphQLObjectType({
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
});


const Author = new GraphQLObjectType({
    name:"Author",
    description:"All detais of an author on the website",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        posts:{
            // type:new GraphQLList(Post),
            type:Post,
            resolve:(author)=>{
                console.log('fakeDatabase.getPostsOfAuthor(author.id) ---> ',fakeDatabase.getPostsOfAuthor(author.id));
                return fakeDatabase.getPostsOfAuthor(author.id)
            }
        }
    })
})

module.exports={Author,Post}
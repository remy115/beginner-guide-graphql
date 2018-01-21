const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType, GraphQLNonNull}=require('graphql');

const Comment=new GraphQLObjectType({
    name:"Comment",
    description:"Detais of a comment",
    fields:()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        content:{type:GraphQLString}
    })
})


const CommentInputType=new GraphQLInputObjectType({
    name:"CommentInput",
    fields:{
        name:{type: new GraphQLNonNull(GraphQLString)},
        content:{type: new GraphQLNonNull(GraphQLString)},
        postId:{type: new GraphQLNonNull(GraphQLInt)}
    }
});

module.exports={Comment, CommentInputType};
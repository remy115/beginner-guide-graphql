const {graphql}=require('graphql');
const schema=require('./schema');

const query=`
    {
        posts{
            title
        }
    }
`;

graphql(schema,query).then(ret=>{
    console.log(JSON.stringify(ret,null,2));
}).catch(err=>{
    console.log(err);
});
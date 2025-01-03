// show dbs;

//show collections

//db.createCollection('user')


db.users.insertOne({
    "firstname":"keni",
    "LastName":"kakadiya",
    "Age":18,
    "gender":"Female"
})

db.users.insertMany([{
    "firstname":"shubham",
    "LastName":"kakadiya",
    "Age":18,
    "gender":"Female"
},
{
    "firstname":"keni",
    "LastName":"kakadiya",
    "Age":18,
    "gender":"Female"
}])

db.users.find()


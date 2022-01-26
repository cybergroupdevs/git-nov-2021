const {MongoClient, ObjectId} = require('mongodb') //short hand for importing multiple modules
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databseName = 'task-manager'

const id = new ObjectId()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databseName);

    
    // db.collection('user').insertOne({
    //     name:'Sukhi',
    //     age: 24
    // }, (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log("The Id of inserted record: " + result.insertedId);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Jeet',
    //         age: 22
    //     }, {
    //         name:'Kaur',
    //         age: 21
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log("Number of records inserted: " + result.insertedCount)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     }, {
    //         description: 'Renew inspection',
    //         completed: false
    //     }, {
    //         description: 'Pot plants',
    //         completed: false
    //     }  
    // ], ( error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log("Data commited to the journal: " + result.acknowledged)
    //     console.log("The Ids of inserted records:")
    //     console.log(result.insertedIds)
    // })

    // db.collection('users').findOne({name: 'Kaur', age: 21 }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectId("61cd934b9a6390471ff29b32") }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('tasks').deleteOne({
    //     description: "Pot plants"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error) 
    // })


})

'use strict';
const mongo = require('./mongo');
const mongodb = require('mongodb');
const collectionNames = require('./collection-names');
mongo.connect(connected);

function connected(err, db) {
    if (err) {
        throw err;
    }
    const exampleDocument = {
        naturalKey: "bob",
        value: 1,
        dateCreated: new Date(),
        owner: new mongodb.ObjectId(),
        someCoolSubObject: {
            isCool: true
        }
    };
    db.collection(collectionNames.example).insertOne(exampleDocument, inserted);
}

function inserted(err, result) {
    if (err) {
        mongo.close(disconnected);
        throw err;
    }
    console.log(result);
    mongo.close(disconnected);
}

function disconnected(err) {
    if (err) {
        throw err;
    }
    console.log("Exiting");
}
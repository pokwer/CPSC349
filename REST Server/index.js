
const express = require('express')
const cors = require('cors')
const app = express()
const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

app.set('port', 3000)

app.use(express.json())
app.use(cors()) 

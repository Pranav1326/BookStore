const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

const dbConnection = mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.f1lhhzq.mongodb.net/books?retryWrites=true&w=majority`,
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then((result) => {
    console.log('MongoDB connected!');
})
.catch((err) => {
    console.log(err);
})

module.exports = dbConnection;
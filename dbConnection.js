const mongoose = require("mongoose");

const CONNECTION_STRING = 'mongodb://Yiwenfeng:ywf154@isit.my.to:27017/yiDB'

const connectDb = async () => {
  try {
    console.log(CONNECTION_STRING);

    const connect = await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true
    });

    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;


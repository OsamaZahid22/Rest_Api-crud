const mongoose = require("mongoose");

const Db = async () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://OSAMA:P08Dq15Ms1SHARYO@cluster0.1sl0ysd.mongodb.net/messages?retryWrites=true&w=majority"
      )
      .then((result) => {
        console.log('mongooes connected');
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
module.exports = Db();

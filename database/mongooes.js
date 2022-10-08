const mongoose = require("mongoose");

const Db = async () => {
  try {
    mongoose
      .connect(
        ""
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

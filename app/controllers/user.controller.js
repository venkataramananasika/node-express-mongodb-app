const models = require('./../models');
const User = models.user;
/**
 * @param {*} req 
 * @param {*} res 
 */
exports.allAccess = async (req, res) => {
  let users = await User.find({},'-password -__v').exec();
  console.log(users);
  res.status(200).send(users);
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

const User = require('../model/User');

const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  try {
    const token = jwt.sign({ algorithm: 'RS256' }, process.env.TOKEN_KEY, {
      expiresIn: '2h',
    });

    const user = new User({
      userAccessKey: token,
    });

    user.userAccessKey = token;
    const newUser = await user.save();
    res.status(200).send(newUser);
  } catch (error) {}
};

exports.getUser = async ({ params: { _id } }, res) => {
  try {
    const user = await User.findById(_id).populate();
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

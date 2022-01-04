const { User } = require("./../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");

const registerSchema = Joi.object({
  username: Joi.string().min(3).required(),
  firstname: Joi.string().min(3).required(),
  lastname: Joi.string().min(3).required(),
  email: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

exports.register = async (req, res) => {
  const { email, password = "", username, firstname, lastname } = req.body;
  const emailExist = await User.findOne({ email: email });
  if (emailExist) {
    res.status(400).send({
      status: "error",
      message: "email already exists",
    });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    username,
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  try {
    const { error } = await registerSchema.validateAsync(req.body);
    if (error) {
      res.status(400).send({
        status: "error",
        message: error.details[0].message,
      });
      return;
    } else {
      const saveUser = await user.save();
      res.status(200).send({
        message: "user created",
        data: saveUser,
        status: "success",
      });
    }
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: error.details[0].message,
    });
  }
};

exports.login = async (req, res) => {
  const { username, password = "" } = req.body;
  const userExist = await User.findOne({ username });
  if (!userExist) {
    res.status(400).send({
      status: "error",
      message: "user doesn't exist",
    });
    return;
  }
  const validPassword = await bcrypt.compare(password, userExist.password);
  if (!validPassword) {
    res.status(400).send({
      status: "error",
      message: "password is not valid",
    });
    return;
  }
  try {
    const { error } = await loginSchema.validateAsync(req.body);
    if (error) {
      res.status(400).send({
        status: "error",
        message: error.details[0].message,
      });
      return;
    } else {
      console.log("token", process.env.TOKEN_SECRET);
      const token = jwt.sign({ _id: userExist._id }, process.env.TOKEN_SECRET);

      res.status(200).send({
        message: "successfully logged in",
        data: { token, userDetails: userExist },
        status: "success",
      });
    }
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: error,
    });
  }
};

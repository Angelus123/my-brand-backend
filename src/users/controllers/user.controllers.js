import users from "../models/user.models.js";
const homepage = (req, res) => res.json({ message: "request recieved" });
const getUsers = async (req, res, next) => {
  const users = await users.find({});
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      articles,
    },
  });
};

const addUser = async (req, res, next) => {
  let articleInfo = {};
  articleInfo.name = req.body.name;
  articleInfo.email = req.body.email;
  articleInfo.phone = req.body.phone;
  articleInfo.role = req.body.role;
  articleInfo.password = req.body.password;
  articleInfo.confirmPassword = req.body.confirmPassword;
  articleInfo.createdAt = new Date().toISOString();
  console.log("articleInfo: ", articleInfo);
  const newArticle = await users.create(articleInfo);
  res.status(201).json({
    status: "success",
    newArticle,
  });
};

const getUser = async (req, res, next) => {
  const Users = await users.findById(req.params.id);
  if (!Users) {
    return next(new AppError("No article found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      Users,
    },
  });
};

//Update Helper
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

//Update controll API
const updateUser = async (req, res, next) => {
  let _id = { _id: req.params.id };
  const filterBody = filterObj(req.body, "name", "email");
  const articles = await users.findByIdAndUpdate(_id, filterBody, {
    new: true,
    runValidators: true,
  });
  if (!articles) {
    res.status(404).json({ status: "No article found with that ID" });
  }
  res.status(200).json({
    status: "success",
    data: {
      articles,
    },
  });
};

const deleteUser = async (req, res, next) => {
  let query = { _id: req.params.id };
  const userDeleted = await users.findByIdAndDelete(query);
  if (!userDeleted) {
    res.status(404).json({ status: "No article found with that ID" });
  }
  res.status(200).json({
    status: "Deleted Successfully",
    data: null,
  });
};

export {homepage, getUsers, getUser, updateUser, addUser, deleteUser, users}
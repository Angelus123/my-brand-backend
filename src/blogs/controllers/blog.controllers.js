import blogs from "../models/blog.models.js";

const homepage = (req, res) => res.json({ message: "request recieved" });

const getBlogs = async (req, res, next) => {
  const articles = await blogs.find({});
  res.status(200).json({
    status: "success",
    results: articles.length,
    data: {
      articles,
    },
  });
};

const addBlog = async (req, res, next) => {
  let articleInfo = {};
  articleInfo.title = req.body.title;
  articleInfo.article = req.body.article;
  articleInfo.createdAt = new Date().toISOString();
  const newArticle = await blogs.create(articleInfo);
  res.status(201).json({
    status: "success",
    newArticle,
  });
};

const getBlog = async (req, res, next) => {
  const Article = await blogs.findById(req.params.id);
  if (!Article) {
    return next(new AppError("No article found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      Article,
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
const updateBlog = async (req, res, next) => {
  let _id = { _id: req.params.id };
  const filterBody = filterObj(req.body, "title", "article");
  const articles = await blogs.findByIdAndUpdate(_id, filterBody, {
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

const deleteBlog = async (req, res, next) => {
  let query = { _id: req.params.id };
  const articleDeleted = await blogs.findByIdAndDelete(query);
  if (!articleDeleted) {
    res.status(404).json({ status: "No article found with that ID" });
  }
  res.status(200).json({
    status: "Deleted Successfully",
    data: null,
  });
};

export { homepage, getBlogs, getBlog, updateBlog, addBlog, deleteBlog, blogs };

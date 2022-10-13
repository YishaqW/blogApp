const express = require("express");
const BlogModel = require("../models/BlogSchema");

const router = express.Router();

// GET: All Blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await BlogModel.find({});
    res.render("Blogs/Blogs", { blogs: blogs });
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

router.get("/new", async (req, res) => {
  try {
    res.render('Blogs/New')
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot create");
  }
});

// POST: CREATE a New Blog
router.post("/", async (req, res) => {
  try {
    const newBlog = await BlogModel.create(req.body);
    res.redirect('/blog')
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot create");
  }
});


// GET: Blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    res.send(blog);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});
// PUT: Update By ID
router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );
    res.send(updatedBlog);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot put");
  }
});

// DELETE

module.exports = router;

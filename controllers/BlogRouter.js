const express = require("express");
const BlogModel = require("../models/BlogSchema");

const router = express.Router();

// GET: All Blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await BlogModel.find({});
    res.render("Blogs/Blogs", { blogs: blogs, loggedInUser: req.session.username });
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
    if (req.body.sponsored === 'on' ) {
      req.body.sponsored = true;
    } else {
      req.body.sponsored = false
    }
    // set the author to the loggedIn user
    req.body.author = req.session.username
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
    res.render('Blogs/ShowBlog', {blogs: blog});
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

router.get('/:id/edit', async (req, res) => {
  try {
    const blogs = await BlogModel.findById(req.params.id)
    res.render('Blogs/Edit', {blog: blogs})
  }
  catch(error){
    console.log(error)
    res.status(403).send(`Cannot edit`)
  }
})

// PUT: Update By ID
router.put("/:id", async (req, res) => {
  try {
   await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );
    res.redirect(`/blog`);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot put");
  }
});

// DELETE
router.delete(`/:id`, async (req,res)=>{
  try{
      const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
      console.log(deletedBlog)
      res.redirect('/blog')
  }catch (error) {
      console.log(error);
      res.status(403).send(`Cannot create`);
    }
})

router.delete(`/:id/delete`, async (req,res)=>{
  try{
      const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
      console.log(deletedBlog)
      res.redirect('/blog')
  }catch (error) {
      console.log(error);
      res.status(403).send(`Cannot create`);
    }
})

module.exports = router;

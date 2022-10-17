const express = require("express");
const UserModel = require("../models/UserSchema");
const bcrypt = require('bcryptjs')

const router = express.Router();

// Add privacy to this router or routes
// Middleware function
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next()
  } else  {
    res.redirect('/user/signin')
  }
})

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot GET");
  }
});

// Render a Signup Form
router.get('/signup', (req, res) => {
  res.render('User/Signup')
})


// Render the Signin Form
router.get('/signin', (req, res) => {
  res.render('User/Signin')
})

router.post('/signin', async (req, res) => {
try {
  // find user by email in database
  const user = await UserModel.findOne({email: req.body.email})
  if (!user) return res.send('Please check your email and password!')
  // check if passwords match 
  const decodedPassword = await bcrypt.compare(req.body.password, user.password)
  if (!decodedPassword) return res.send('Please check your email and password!')
  // redirect to /blogs
  res.redirect('/blog')

} catch (error) {

}
})

// Sign-out user and destroy session
router.get('/signout', (req, res) => {
  try {
    req.session.destroy()
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
})

router.post("/signup", async (req, res) => {
  try {
    // check if user exist
    const userAlreadyExist = await UserModel.find({ email: req.body.email });

    // if there is a object inside of the array
    if (userAlreadyExist[0]) {
      return res.send("User Already exist!");
    }

    // Create a new user
    const SALT = await bcrypt.genSalt(10) // how secure your hash will be
    // re-assign the password to the hashed password
    req.body.password = await bcrypt.hash(req.body.password, SALT)
    const user = await UserModel.create(req.body);
    res.redirect('/user/Signin')
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot POST");
  }
});


// Find user by id
router.get('/:id', async(req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(403).send("Cannot GET user by id");
      }
    
})

// PUT update a user
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body,  {'returnDocument' :"after"})
        res.send(updatedUser)
    } catch (error) {
        console.log(error);
        res.status(403).send("Cannot PUT user by id");
    }
})

// Delete user
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
        res.send(deletedUser)
    } catch (error) {
        console.log(error);
        res.status(403).send("Cannot DELETE user by id");
    }
})

module.exports = router;

// const express = require('express')
// const UserRouter = require('../models/UserSchema')

// const router = express.Router()

// // GET: All Blogs
// router.get('/', async (req, res) => {
//     try {
//         const user = await UserRouter.find({})
//         res.send(user)
//     } catch (error) {
//         console.log(error);
//         res.status(403).send('Cannot get')
//     }
// })

// // GET: Blog by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const blog = await UserRouter.findById(req.params.id)
//         res.send(blog)
//     } catch (error) {
//         console.log(error);
//         res.status(403).send('Cannot get')
//     }
// })



// router.post("/", async (req, res) => {
//   try {
//     // check if user exist
//     const userAlreadyExist = await UserModel.find({ email: req.body.email });

//     // if there is a object inside of the array
//     if (userAlreadyExist[0]) {
//       return res.send("User Already exist!");
//     }

//     // Create a new user
//     const user = await UserModel.create(req.body);
//     res.send(user);
//   } catch (error) {
//     console.log(error);
//     res.status(403).send("Cannot POST");
//   }
// });

// // POST: CREATE a New Blog
// // router.post('/', async (req, res) => {
// //     try{
// //         const newUser = await UserRouter.create(req.body)
// //         res.send(newUser)
// //     } catch(error){
// //         console.log(error);
// //         res.status(403).send('Cannot create')
// //     }
// // })

// // PUT: Update By ID
// router.put('/:id', async (req, res)=> {
//    try {
//     const updatedUser = await UserRouter.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' :"after"})
//     res.send(updatedUser)
//    } catch (error) {
//     console.log(error);
//         res.status(403).send('Cannot put')
//    }
// })


// // DELETE





// module.exports = router;

const express = require("express");
const UserModel = require("../models/UserSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot GET");
  }
});

router.post("/", async (req, res) => {
  try {
    // check if user exist
    const userAlreadyExist = await UserModel.find({ email: req.body.email });

    // if there is a object inside of the array
    if (userAlreadyExist[0]) {
      return res.send("User Already exist!");
    }

    // Create a new user
    const user = await UserModel.create(req.body);
    res.send(user);
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

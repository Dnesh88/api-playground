const express = require("express");
const router = express.Router();

// DB collection mock
const users = ["Dinesh", "Taniel", "Zack", "Adam"];

/* const userArray = [
  {
    id: 100,
    name: "Dinesh",
  },
  {
    id: 101,
    name: "Daniel",
  },
  {
    id: 102,
    name: "Zack",
  },
]; */

// GET /users -> give me all the users
router.get("/", (reqest, respose) => {
  // const data = [];
  //   for (const user of userArray) {
  //     data.push(user.name);
  //   }
  respose.status(200).json({
    // users: data,
    users,
  });
});

// GET /users/:id -> find one user by their id
router.get("/:id", (reqest, respose) => {
  console.log(reqest.params);
  const user = users[reqest.params.id];
  respose.status(200).json({
    user,
  });
});

// POST /users -> create a user
router.post("/", (reqest, respose) => {
  const newUser = `User: ${Math.floor(Math.random() * 1000)}`;
  users.push(newUser);
  respose.status(201).json({
    message: "You have created a user!",
  });
});

// PUT /users/:id -> update one user by their id
router.put("/:id", (reqest, respose) => {
  const update = `User: ${Math.floor(Math.random() * 1000)}`;
  users[reqest.params.id] = update;
  respose.status(200).json({
    message: "User details updated!",
  });
});

// DELETE /users/:id -> delete a user by their id
router.delete("/:id", (reqest, respose) => {
  users.splice(reqest.params.id, 1);
  respose.status(200).json({
    message: "You deleted a user!",
  });
});

module.exports = router;

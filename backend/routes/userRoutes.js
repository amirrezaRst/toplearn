const { Router } = require('express');

const Auth = require("../middleware/Auth");
const AdminAuth = require("../middleware/AdminAuth");
const { userList, singleUser, register, login, deleteUser, addToFavorite, deleteToFavorite } = require('../controller/userController');

const router = Router();

router.get("/userList", userList);
router.get("/singleUser/:id", singleUser);
router.get("/addToFavorite/:userId/:courseId", [Auth], addToFavorite);
router.get("/deleteToFavorite/:userId/:courseId", [Auth], deleteToFavorite);

router.post("/register", register);
router.post("/login", login);

// router.put("/editInfo", editInfo);

router.delete("/deleteUser/:id", [Auth, AdminAuth], deleteUser);

module.exports = router;
const { Router } = require('express');

const Auth = require("../middleware/Auth");
const AdminAuth = require("../middleware/AdminAuth");
const { userList, singleUser, register, login, deleteUser, addToFavorite, deleteToFavorite, addToCart, removeFromCart } = require('../controller/userController');

const router = Router();

router.get("/userList", userList);
router.get("/singleUser/:id", singleUser);
router.get("/addToFavorite/:userId/:courseId", [Auth], addToFavorite);
router.get("/deleteToFavorite/:userId/:courseId", [Auth], deleteToFavorite);
router.get("/addToCart/:userId/:courseId", [Auth], addToCart)
// router.get("/teacherList", teacherList);
// router.get("/singleTeacher/:id", singleTeacher);

router.post("/register", register);
router.post("/login", login);
// router.post("/newTeacher", [Auth, AdminAuth], newTeacher);

// router.put("/editInfo", editInfo);

router.delete("/deleteUser/:id", [Auth, AdminAuth], deleteUser);
router.delete("/removeFromCart/:userId/:courseId", [Auth], removeFromCart);

module.exports = router;
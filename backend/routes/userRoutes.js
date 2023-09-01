const { Router } = require('express');

const Auth = require("../middleware/Auth");
const AdminAuth = require("../middleware/AdminAuth");
const { userList, singleUser, register, login, deleteUser } = require('../controller/userController');

const router = Router();

// router.get("/userList", [Auth, AdminAuth], userList);
// router.get("/singleUser", [Auth], singleUser);
router.get("/userList",  userList);
router.get("/singleUser/:id", singleUser);

router.post("/register", register);
router.post("/login", login);

// router.put("/editInfo", editInfo);

router.delete("/deleteUser/:id", [Auth, AdminAuth], deleteUser);

module.exports = router;
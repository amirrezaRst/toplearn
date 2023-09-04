const { Router } = require('express');

const { teacherList, singleTeacher, createTeacher, editBio, editProfile, deleteTeacher } = require('../controller/teacherController');
const Auth = require("../middleware/Auth");
const AdminAuth = require("../middleware/AdminAuth");

const router = Router();


router.get("/teacherList", teacherList);
router.get("/singleTeacher/:id", singleTeacher);

router.post("/newTeacher", [Auth, AdminAuth], createTeacher);

router.put("/editBio/:id", editBio);
router.put("/editProfile/:id", editProfile);

router.delete("/deleteTeacher/:id", [Auth, AdminAuth], deleteTeacher);

module.exports = router;
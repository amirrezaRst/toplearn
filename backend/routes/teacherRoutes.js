const { Router } = require('express');
// , singleTeacher, createTeacher, editBio, editProfile, deleteTeacher
const { teacherList, singleTeacher, editProfile, editInfo, deleteTeacher, teacherLicense } = require('../controller/teacherController');
const Auth = require("../middleware/Auth");
const AdminAuth = require("../middleware/AdminAuth");
const TeacherAuth = require('../middleware/TeacherAuth');

const router = Router();


router.get("/teacherList", teacherList);
router.get("/singleTeacher/:id", singleTeacher);
router.get("/teacherLicense/:id", [Auth, AdminAuth], teacherLicense)


router.put("/editTeacherInfo/:id", [Auth, TeacherAuth], editInfo);
router.put("/editProfile/:id", editProfile);

router.delete("/deleteTeacher/:id", [Auth, AdminAuth], deleteTeacher);

module.exports = router;
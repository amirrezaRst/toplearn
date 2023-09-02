const { Router } = require('express');
const { teacherList, singleTeacher, createTeacher, editBio, editProfile, deleteTeacher } = require('../controller/teacherController');

const router = Router();


router.get("/teacherList", teacherList);
router.get("/singleTeacher/:id", singleTeacher);

router.post("/newTeacher", createTeacher);

router.put("/editBio/:id", editBio);
router.put("/editProfile/:id", editProfile);

router.delete("/deleteTeacher/:id", deleteTeacher);

module.exports = router;
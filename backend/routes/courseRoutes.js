const { Router } = require('express');

const { courseList, singleCourse, createCourse, deleteCourse } = require('../controller/courseController');
const Auth = require("../middleware/Auth");
const AdminAuth = require("../middleware/AdminAuth");

const router = Router();


router.get("/courseList", courseList);
router.get("/singleCourse/:id", singleCourse);

router.post("/newCourse", [Auth, AdminAuth], createCourse);

router.delete("/deleteCourse/:id", [Auth, AdminAuth], deleteCourse);

module.exports = router;
const { Router } = require('express');
const { courseList, singleCourse, createCourse, deleteCourse } = require('../controller/courseController');


const router = Router();


router.get("/courseList", courseList);
router.get("/singleCourse/:id", singleCourse);

router.post("/newCourse", createCourse);

router.delete("/deleteCourse/:id", deleteCourse);

module.exports = router;
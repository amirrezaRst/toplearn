const { Router } = require('express');

const { addComment, deleteComment, captcha } = require('../controller/commentController');
const Auth = require('../middleware/Auth');
const router = Router();


router.post("/addComment/:id", Auth, addComment);

// router.put("/updateComment/:productId/:commentId", editComment);

router.delete("/deleteComment/:courseId/:commentId", deleteComment);


module.exports = router;
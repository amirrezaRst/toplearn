const { Router } = require('express');

const { addComment, deleteComment, captcha, addReply } = require('../controller/commentController');
const Auth = require('../middleware/Auth');
const router = Router();


router.post("/addComment/:id", Auth, addComment);
router.post("/addReply/:courseId/:commentId", Auth, addReply)
// router.put("/updateComment/:productId/:commentId", editComment);

router.delete("/deleteComment/:courseId/:commentId", deleteComment);


module.exports = router;
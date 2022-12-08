var express = require('express');
var router = express.Router();
const { registerUser, authUser, allUsers } = require('../controllers/userControllers');
const { protect } = require("../middleware/authMiddleware");

router.route('/').post(registerUser).get(protect, allUsers);
router.post('/login', authUser);


module.exports = router;
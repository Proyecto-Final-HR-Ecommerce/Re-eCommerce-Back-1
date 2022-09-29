const { Router } = require("express");
const verifyToken = require("../../middleware/verifyToken")
const {
  registerPost,
  authenticate,
  confirmUser,
  changePassword,
  forgotPassword,
} = require("../../controllers/login.controller");

const router = Router();

router.post("/register", registerPost);
router.post("/login", authenticate);
router.get("/confirmar/:token", confirmUser);
router.get("/olvide-password/:token", forgotPassword);
router.post("/olvide-password/:token", changePassword);
//router.get('/perfil',verifyToken, perfil )
module.exports = router;

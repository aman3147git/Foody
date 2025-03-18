import express from "express";
import { checkAuth, forgotPassword, Login, Logout, Register, resetPassword, updateProfile, verifyEmail} from "../controllers/user.js";
import { verifytoken } from "../utils/verifyToken.js";

const router=express.Router();
router.post('/register',Register);
router.post('/login',Login);
router.get('/logout',Logout);
router.post('/verify-email',verifyEmail);
router.post('/forgot-password',forgotPassword);
router.post('/reset-password/:token',resetPassword);
router.put('/profile-update',verifytoken,updateProfile);
router.get('/check-auth',verifytoken,checkAuth);


export default router;
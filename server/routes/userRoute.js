import express from 'express';
import AuthController from '../controllers/AuthUserController';
import userValidator from '../middlewares/validate';

const router = express.Router();

router.post(
  '/auth/signup',
  userValidator.validateRegistrationEntry,
  AuthController.registerUser,
);

export default router;

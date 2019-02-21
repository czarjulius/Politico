import express from 'express';
import ResultController from '../controllers/ResultController';
import auth from '../middlewares/jwtAuth';

const router = express.Router();

router.get(
  '/office/:officeid/result',
  auth.verifyUserToken,
  ResultController.getResult,
);

export default router;

import express from 'express';
import VoteController from '../controllers/VoteController';
import auth from '../middlewares/jwtAuth';

const router = express.Router();

router.post(
  '/vote',
  auth.verifyUserToken,
  VoteController.castVote,
);

export default router;


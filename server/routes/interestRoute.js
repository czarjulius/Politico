
import express from 'express';
import auth from '../middlewares/jwtAuth'
import InterestController from '../controllers/InterestController';
import CandidateController from '../controllers/candidateController';

const router = express.Router();
router.post(
  '/office/:userId/register',
  auth.verifyUserToken,
  InterestController.declareInterest,
);

router.patch(
  '/office/:userId/register',
  CandidateController.patchInterest,
);

export default router;

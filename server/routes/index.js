import express from 'express';
import officeRoute from './officeRoute';
import partyRoute from './partyRoute';
import userRoute from './userRoute';
import interestRoute from './interestRoute';
import voteRoute from './voteRoute';
import resultRoute from './resultRoute';


const router = express.Router();

router.use('/api/v1', officeRoute);
router.use('/api/v1', partyRoute);
router.use('/api/v1', userRoute);
router.use('/api/v1', interestRoute);
router.use('/api/v1', voteRoute);
router.use('/api/v1', resultRoute);


export default router;

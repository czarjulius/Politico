import express from 'express';
import officeRoute from './officeRoute';
import partyRoute from './partyRoute';
import userRoute from './userRoute';
import interestRoute from './interestRoute';


const router = express.Router();

router.use('/api/v1', officeRoute);
router.use('/api/v1', partyRoute);
router.use('/api/v1', userRoute);
router.use('/api/v1', interestRoute);

export default router;

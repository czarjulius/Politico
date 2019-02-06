import express from 'express';
import officeRoute from './officeRoute';
import partyRoute from './partyRoute';
import userRoute from './userRoute';

const router = express.Router();

router.use('/api/v1', officeRoute);
router.use('/api/v1', partyRoute);
router.use('/api/v1', userRoute);

export default router;

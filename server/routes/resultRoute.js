import express from 'express';
import ResultController from '../controllers/ResultController';

const router = express.Router();


router.get(
  '/office/:officeId/result',
  ResultController.getResult,
);
export default router;

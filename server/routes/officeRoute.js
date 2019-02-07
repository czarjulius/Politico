import express from 'express';
import OfficeController from '../controllers/OfficeController';
import OfficeValidator from '../middlewares/OfficeValidator';
import auth from '../middlewares/jwtAuth';

const router = express.Router();


router.post(
  '/offices',
  OfficeValidator.validateFields,
  auth.verifyUserToken,
  OfficeController.postOffice,
);

router.get(
  '/offices/:id',
  auth.verifyUserToken,
  OfficeController.getOffice,
);

router.get(
  '/offices/',
  auth.verifyUserToken,
  OfficeController.getOffices,
);

export default router;

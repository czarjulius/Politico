import express from 'express';
import OfficeController from '../controllers/OfficeController';
import OfficeValidator from '../middlewares/OfficeValidator';

const router = express.Router();


router.post(
  '/offices',
  OfficeValidator.validateFields,
  OfficeController.postOffice,
);

router.get(
  '/offices/:id',
  OfficeController.getOffice,
);

router.get(
  '/offices/',
  OfficeController.getOffices,
);

export default router;

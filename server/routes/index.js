import express from 'express';
import PartyController from '../controllers/PartyController';
import PartyValidator from '../middlewares/PartyValidator';
import OfficeController from '../controllers/OfficeController';
import AuthController from '../controllers/AuthUserController';
import validator from '../middlewares/validate';


const router = express.Router();


router.post(
  '/parties',
  PartyValidator.validateFields,
  PartyController.postParty,
);

router.get(
  '/parties/:id',
  PartyController.getParty,
);
router.patch(
  '/parties/:id',
  PartyValidator.validateFields,
  PartyController.patchParty,
);
router.post(
  '/offices',
  OfficeController.postoffice,
);

router.get(
  '/offices/:id',
  OfficeController.getOffice,
);

router.get(
  '/parties/',
  PartyController.getParties,
);

router.delete(
  '/parties/:id',
  PartyController.deleteParty,
);

router.get(
  '/offices/',
  OfficeController.getOffices,
);


router.post(
  '/register/',
  validator.validateRegistrationEntry,
  AuthController.registerUser,
);

export default router;

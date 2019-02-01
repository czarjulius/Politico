import express from 'express';
import PartyController from '../controllers/PartyController';
import PartyValidator from '../middlewares/PartyValidator';
import OfficeController from '../controllers/OfficeController';


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
export default router;


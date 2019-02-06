import express from 'express';
import PartyController from '../controllers/PartyController';
import PartyValidator from '../middlewares/PartyValidator';

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

router.get(
  '/parties/',
  PartyController.getParties,
);

router.delete(
  '/parties/:id',
  PartyController.deleteParty,
);


export default router;

import express from 'express';
import PartyController from '../controllers/PartyController';
import PartyValidator from '../middlewares/PartyValidator';
import auth from '../middlewares/jwtAuth';

const router = express.Router();

router.post(
  '/parties/',
  auth.verifyUserToken,
  PartyValidator.validateFields,
  PartyController.postParty,
);

router.get(
  '/parties/:id',
  auth.verifyUserToken,
  PartyController.getParty,
);

router.patch(
  '/parties/:id',
  auth.verifyUserToken,
  PartyValidator.validateFields,
  PartyController.patchParty,
);

router.get(
  '/parties/',
  auth.verifyUserToken,
  PartyController.getParties,
);

router.delete(
  '/parties/:id',
  auth.verifyUserToken,
  PartyValidator.validateFields,
  PartyController.deleteParty,
);


export default router;

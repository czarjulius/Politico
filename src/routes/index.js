import express from 'express';
import PartyController from '../controllers/PartyController';
import OfficeController from '../controllers/OfficeController';
import PartyValidator from '../middlewares/PartyValidator';
import OfficeValidator from '../middlewares/OfficeValidator';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello world!!!');
});

router.get(
  '/parties/:id',
  PartyController.getParty,
);

router.get(
  '/parties',
  PartyController.getParties,
);

router.post(
  '/parties',
  PartyController.postParty,
);

router.patch(
  '/party/:id',
  PartyController.patchParty,
);

router.delete(
  '/party/:id',
  PartyController.deleteParty,
);

export default router;

import express from 'express';
import { deleteShoe, getShoe, getShoes, patchShoe, postShoe } from '../controllers/shoesController';

const router = express.Router();

router.get('/:id', getShoe);
router.get('/', getShoes);
router.post('/', postShoe);
router.patch('/:id', patchShoe);
router.delete('/:id', deleteShoe);

export { router as shoesRouter };
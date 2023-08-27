import express from 'express';
import Shoe from '../models/shoes';

const router = express.Router();

router.get('/', (req, res) => {
  Shoe.find()
    .then(shoes => res.json(shoes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', async (req, res) => {
  const { name, price, image, discount } = req.body;
  const shoe = new Shoe({ name, price, image, discount });
  try {
    const savedShoe = await shoe.save();
    res.json(savedShoe);
  } catch (err) {
    res.json({ message: err });
  }
});

export { router as shoesRouter };


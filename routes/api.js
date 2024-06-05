
import express from 'express';
import { LinearSearchSubmit } from '../controllers/LinearSearchController.js';
import { InsertionSortSubmit } from '../controllers/InsertionSortController.js';
import { BinarySearchSubmit } from '../controllers/BinarySearchController.js';

const router = express.Router();

router.post('/', (req, res) => {
  res.send('Hello World!');
});
router.post('/linear',LinearSearchSubmit);
router.post('/insertion',InsertionSortSubmit);
router.post('/binary',BinarySearchSubmit);
export default router;
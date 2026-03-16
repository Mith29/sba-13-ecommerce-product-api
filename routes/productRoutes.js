import { createProduct,getProduct,updateProduct, deleteProduct, getProducts } from "../controllers/productControllers.js";
import express from 'express';
import {Router} from 'express';

const router = express.Router();

router.post('/api/products', createProduct);
router.get('/api/products/:id', getProduct);
router.put('/api/products/:id', updateProduct);
router.delete('/api/products/:id', deleteProduct);
router.get('/api/products', getProducts);

export default router;
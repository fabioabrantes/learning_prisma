import {Router} from 'express';

import {CreateProductController} from './controllers/CreateProductController';
import {CreateCategoryController} from './controllers/CreateCategoryController';
import {CreateProductCategoryController} from './controllers/CreateProductCategoryController';
import {CreateProductWithExistCategoryController} from './controllers/CreateProductWithExistCategoryController';
import {FindProductController} from './controllers/FindProductController';
import {FindCategoryController} from './controllers/FindCategoryController';




const router = Router();

const createProductController = new CreateProductController();
const createCategoryController = new CreateCategoryController();
const createProductCategoryController = new CreateProductCategoryController();
const createProductWithExistCategoryController = new CreateProductWithExistCategoryController();
const findProductController = new FindProductController();
const findCategoryController = new FindCategoryController();






router.post('/product', createProductController.handle);
router.get('/product/:id', findProductController.handle);

router.post('/category', createCategoryController.handle);
router.get('/category/:id', findCategoryController.handle);

router.post('/categoryProduct', createProductCategoryController.handle);
router.post('/productWithCategory', createProductWithExistCategoryController.handle);



export {router};
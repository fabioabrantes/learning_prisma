import {Request, Response} from 'express';
import {prismaClient} from '../database/prismaClient';

export class CreateProductWithExistCategoryController{

  async handle(req: Request, res: Response): Promise<Response>{

    const { name, price, bar_code, id_category} = req.body;

    const product = await prismaClient.productCategory.create({
      data:{
        product:{
          create:{
            name,
            price,
            bar_code
          }
        },
        category:{
          connect:{
            id: id_category
          }
        }
      }
    });

    return res.json(product);
  }
}
import {Request, Response} from 'express';
import {prismaClient} from '../database/prismaClient';

export class FindProductController{

  async handle(req: Request, res: Response): Promise<Response>{

    const { id} = req.params;

    const product = await prismaClient.product.findFirst({
      where:{
        id
      },
      select:{
        id:true,
        name:true,
        ProductCategory:{
          select:{
            category:true
          }
        }

      }
    });

    return res.json(product);
  }
}
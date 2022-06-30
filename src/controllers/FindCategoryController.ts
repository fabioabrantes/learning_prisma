import {Request, Response} from 'express';
import {prismaClient} from '../database/prismaClient';

export class FindCategoryController{

  async handle(req: Request, res: Response): Promise<Response>{

    const { id} = req.params;

    const category = await prismaClient.category.findFirst({
      where:{
        id
      },
      select:{
        id:true,
        name:true,
        ProductCategory:{
          select:{
            product:true
          }
        }

      }
    });

    return res.json(category);
  }
}
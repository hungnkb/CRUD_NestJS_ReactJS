import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IProduct } from "../interfaces/product.interface";

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel('IProduct')
    private readonly productModel: Model<IProduct>
  ) {
    // super(userModel);
  }
}
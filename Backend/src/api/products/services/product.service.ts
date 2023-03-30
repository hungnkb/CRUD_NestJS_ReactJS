import { Inject, Injectable, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { IProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCT_MODEL')
        private productModel: Model<IProduct>
    ) { }

    async create(body): Promise<IProduct | any> {
        let { name, category, price, quantity, description } = body;
        let newProduct = await this.productModel.create({ name, category, price, quantity, description })
        if (newProduct) {
            return newProduct;
        } else {
            throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
        }
    }

    async readAll(): Promise<IProduct | any> {
        let productList = await this.productModel.find({});
        if (productList.length > 0) {
            return productList;
        } else {
            throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
        }
    }

    async read(id): Promise<IProduct | any> {
        let product = await this.productModel.findOne({ _id: id });
        if (product) {
            return product;
        } else {
            throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
        }
    }

    async edit(body): Promise<IProduct | any> {
        console.log(body);
        
        let product = await this.read(body.id);
        let { name, quantity, price, description, category } = body;
        if (product) {
            let editProduct = await this.productModel.updateOne({ _id: body.id }, { name, quantity, price, description, category })
            if (editProduct) {
                return editProduct;
            }
        } else {
            throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
        }
    }
}

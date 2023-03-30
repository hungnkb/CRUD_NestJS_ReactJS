import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ValidationPipe } from 'src/validation.pipe';
import { ProductService } from '../services/product.service';

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    readAll() {
        return this.productService.readAll();
    }

    @Post()
    create(@Body() body) {
        return this.productService.create(body)
    }

    @Put()
    edit(@Body() body){
        return this.productService.edit(body)
    }   

    // @Post()
    // create(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<any> {
    //     return this.userService.create(createUserDto)
    // }

}

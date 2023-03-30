import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/modules/database.module';
import { databaseProviders } from 'src/database/services/database.providers';
import { ProductController } from '../controllers/product.controller';
import { ProductProvider } from '../services/product.provider';
import { ProductService } from '../services/product.service';

@Module({
    imports: [DatabaseModule],
    controllers: [ProductController],
    providers: [
        ProductService, 
        ...ProductProvider,
        ...databaseProviders,
    ]
})
export class ProductModule { }

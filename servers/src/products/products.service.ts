import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Product, ProductDocument } from 'schemas/product.schema';
import { Product,ProductDocument} from './Schema/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DEFAULT_PRODUCTS } from 'src/Defaultdata';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
  ) {}

  async createDefaultData() {
    const products = await this.productModel.find().exec();

    if (products.length === 0) {
      return this.productModel.insertMany(DEFAULT_PRODUCTS);
    }
  }
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id).exec();
  }

  async removeAll(): Promise<any> {
    return this.productModel.deleteMany({}).exec();
  }
}

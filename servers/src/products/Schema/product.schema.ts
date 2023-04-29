import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  detailUrl: string;

  @Prop({
    type: {
      shortTitle: { type: String },
      longTitle: { type: String },
    },
    required: true,
  })
  title: { shortTitle: string; longTitle: string };

  @Prop({
    type: {
      mrp: { type: Number },
      cost: { type: Number },
      discount: { type: String },
    },
    required: true,
  })
  price: { mrp: number; cost: number; discount: string };

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: false})
  description: string;

  @Prop()
  discount?: string;

  @Prop()
  tagline?: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

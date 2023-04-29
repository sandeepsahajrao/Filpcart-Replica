import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const DB_PASS1 = configService.get<string>('DB_PASS');
        const DB_USER1 = configService.get<string>('DB_USER');
        const DB_NAME1 = configService.get<string>('DB_NAME');
        // console.log(DB_NAME1,DB_PASS1,DB_USER1)
        const uri = `mongodb+srv://${DB_USER1}:${DB_PASS1}@filpcartdata.mw6jvpp.mongodb.net/${DB_NAME1}?retryWrites=true&w=majority`;
        return {
          uri,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

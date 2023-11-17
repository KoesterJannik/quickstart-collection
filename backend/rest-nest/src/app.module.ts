import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

const ENV_VARIABLES_SCHEMA = Joi.object({
  DATABASE_URL: Joi.string().required(),
  BCRYPT_SALT: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_DURATION_IN_SEC: Joi.string().required(),
  PORT: Joi.number().default(3000),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: ENV_VARIABLES_SCHEMA,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

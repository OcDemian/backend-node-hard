import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule
  ]
})
export class AuthModule {}

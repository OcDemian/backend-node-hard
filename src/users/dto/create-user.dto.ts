import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example: 'user@example.ru', description: 'Почта'})
    readonly email: string;
    @ApiProperty({example: '123456', description: 'Пароль'})
    readonly password: string;
}
import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto{
    @ApiProperty({example: 'USER', description: 'Значение роли'})
    readonly value: string;
    @ApiProperty({example: '1', description: 'Id пользователя'})
    readonly userId: number;
}
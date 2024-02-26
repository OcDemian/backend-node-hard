import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto{
    @ApiProperty({example: '225', description: 'id пользователя'})
    readonly userId: number;
    @ApiProperty({example: 'Рассылал спам', description: 'Причина бана'})
    readonly banReason: string;
}
import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class CreatePostDto {
    @ApiProperty({example: 'Причина бессоницы?', description: 'Заголовок поста'})
    @IsString({message: 'Должно быть строкой'})
    readonly title:string;

    @ApiProperty({example: 'Много кофе пить ельзя.', description: 'Контент поста'})
    @IsString({message: 'Должно быть строкой'})
    readonly content:string;

    @ApiProperty({example: '1', description: 'Id пользователя'})
    // @IsNumber({},{message: 'Должно быть числом'})
    readonly userId: number;
}
import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "../users/users.model";

interface PostCreationAttrs{
    title: string,
    content: string,
    userId: number,
    image: string
}
@Table({
    tableName: 'posts'
})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;

    @ApiProperty({example: 'Причина бессоницы?', description: 'Заголовок поста'})
    @Column({type:DataType.STRING, unique: true, allowNull: false})
    title:string;

    @ApiProperty({example: 'Много кофе пить ельзя.', description: 'Контент поста'})
    @Column({type:DataType.STRING, allowNull: false})
    content:string;

    @ApiProperty({example: '/coffee.png', description: 'Путь изображения'})
    @Column({type:DataType.STRING, allowNull: false})
    image:string;

    @ForeignKey(() => User)
    @Column({type:DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User
}
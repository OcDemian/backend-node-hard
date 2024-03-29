import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";

@ApiTags('Посты')
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor( 'image'))
    CreatePost(@Body() dto: CreatePostDto,
                @UploadedFile() image) {

        return this.postService.create(dto, image)
    }
}

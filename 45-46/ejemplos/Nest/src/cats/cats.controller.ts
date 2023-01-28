import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}

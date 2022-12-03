import { Controller, Get } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cat, CollarColorEnum } from './cat';

@ApiTags('cats')
@Controller('cat')
export class CatsController {
  @Get()
  @ApiQuery({ enum: CollarColorEnum, enumName: 'CollarColor' })
  @ApiResponse({ status: 200, type: [Cat] })
  find() {
    return [];
  }
}
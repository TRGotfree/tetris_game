import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // index(@Res() response: Response) {
  //   return response.status(200).sendFile(join(__dirname, '..', 'public', 'index.js'));
  // }

  
}

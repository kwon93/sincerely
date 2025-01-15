import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSincerely(): string {
    return 'Sincerely.io';
  }
}

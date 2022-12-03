import { ApiProperty } from '@nestjs/swagger';

export enum CollarColorEnum {
  'red' = 'red',
  'green' = 'green',
  'blue' = 'blue',
}
export type CollarColor = keyof typeof CollarColorEnum

export class Cat {
  @ApiProperty({ enum: CollarColorEnum, enumName: 'CollarColor' })
  collar_color: CollarColor;
}
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, ValidateNested } from 'class-validator';

export class CreateGenderDto {
  @IsString()
  @ApiProperty({
    description: 'Gênero do jogo',
    example: 'Aventura',
  })
  name: string;

  @ApiProperty({
    description: 'Id do jogo a ser adicionado no gênero',
  })
  gamesId?: string;
}

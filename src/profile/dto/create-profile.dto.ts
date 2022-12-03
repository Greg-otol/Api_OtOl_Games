import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsUUID, ValidateNested } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do perfil',
    example: 'GregOtOl',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do perfil',
    example:
      'https://meups.com.br/wp-content/uploads/2018/12/PESQUISA_GAMER-900x503.jpg',
  })
  imageUrl: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário',
    example: 'e9fa4fb9-8482-44d3-a4b5-1f82b1552936',
  })
  userId: string;
}

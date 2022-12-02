import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Call Of Duty',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Capa do Jogo',
    example:
      'https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/02/call-of-duty.jpg?resize=800%2C450&ssl=1',
  })
  coverImageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do jogo',
    example:
      'Call of Duty®: Modern Warfare, está de volta, remasterizado em alta definição',
  })
  description: string;

  @ApiProperty({
    description: 'Ano de lançamento',
    example: 2016,
  })
  year: number;

  @ApiProperty({
    description: 'Pontuação do jogo no IMB',
    example: 5,
  })
  imbScore: number;

  @IsUrl()
  @ApiProperty({
    description: 'Trailer do jogo',
    example: 'https://www.youtube.com/watch?v=OeVapCrI1pY',
  })
  trailerYoutubeUrl: string;

  @IsUrl()
  @ApiProperty({
    description: 'Gameplay',
    example: 'https://www.youtube.com/watch?v=ISc1orDBziY',
  })
  gameplayYouTubeUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Gênero do jogo',
    example: 'Ação',
  })
  genreGame?: string;
}

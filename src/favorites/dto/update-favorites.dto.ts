import { ApiProperty } from '@nestjs/swagger';

export class UpdateFavoritesDto {
  @ApiProperty({
    description: 'Id do jogo',
    example: '3b6586ae-0e9d-49df-8d16-6f9140e7ce0d',
  })
  gameId?: string;

  @ApiProperty({
    description: 'Id do jogo para adicionar ou remover da lista de favoritos',
    example: '3b6586ae-0e9d-49df-8d16-6f9140e7ce0d',
  })
  favoriteGameId?: string;
}

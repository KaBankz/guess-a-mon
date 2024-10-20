import PokemonData from '@/constants/data.json';

export async function GET() {
  return Response.json(PokemonData);
}

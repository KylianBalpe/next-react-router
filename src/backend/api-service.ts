export class ApiService {
  static async getPokemon(page?: number) {
    const offset = Number(page) * 10;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`,
    );
    const res = await response.json();
    return res;
  }
}

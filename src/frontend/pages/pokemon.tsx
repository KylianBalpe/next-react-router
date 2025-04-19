import { ApiService } from "@/backend/api-service";
import { Card, CardContent } from "@/frontend/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/frontend/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export function PokemonPage() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { data: pokemon, isLoading } = useQuery({
    queryKey: ["pokemon", page],
    queryFn: () => ApiService.getPokemon(Number(page)),
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Pokemon</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Card>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>URL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pokemon.results.map(
                    (pokemon: { name: string; url: string }) => (
                      <TableRow key={pokemon.name}>
                        <TableCell className="font-medium">
                          {pokemon.name}
                        </TableCell>
                        <TableCell>{pokemon.url}</TableCell>
                      </TableRow>
                    ),
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

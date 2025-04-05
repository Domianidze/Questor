import { GameCard } from '@/components/game-card';
import { type Game } from '@/types';

interface GameListingProps {
    heading?: string;
    games: Game[];
}

export function GameListing({ heading, games }: GameListingProps) {
    if (!games.length) {
        return;
    }

    return (
        <div className="space-y-4 p-4">
            <h2 className="text-lg font-semibold">{heading}</h2>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-4">
                {games.map((game) => (
                    <GameCard game={game} key={game.id} />
                ))}
            </div>
        </div>
    );
}

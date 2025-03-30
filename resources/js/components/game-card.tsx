import { type Game } from '@/types';

interface GameCardProps {
    game: Game;
}

export function GameCard({ game }: GameCardProps) {
    return (
        <div key={game.id} className="w-full">
            <img src={game.cover} alt={game.name} className="bg-sidebar aspect-[3/4] w-full rounded object-cover object-center" />
            <p className="pt-1">{game.name}</p>
        </div>
    );
}

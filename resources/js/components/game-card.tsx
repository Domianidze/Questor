import { type Game } from '@/types';
import { Link } from '@inertiajs/react';

interface GameCardProps {
    game: Game;
}

export function GameCover({ game }: GameCardProps) {
    return <img src={game.cover} alt={game.name} className="bg-sidebar aspect-[3/4] w-full rounded-lg object-cover object-center" />;
}

export function GameCard({ game }: GameCardProps) {
    return (
        <Link href={route('game', { game: game.slug })} className="w-full hover:opacity-75">
            <GameCover game={game} />
            <p className="pt-1">{game.name}</p>
        </Link>
    );
}

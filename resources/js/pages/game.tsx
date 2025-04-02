import { GameCover } from '@/components/game-card';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type Game } from '@/types';
import { Head, router } from '@inertiajs/react';
import { StarIcon } from 'lucide-react';
import moment from 'moment';

interface GamesProps {
    game: Game;
    inLibrary: boolean;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Games',
        href: '/games',
    },
    {
        title: 'Game',
        href: '/game',
    },
];

export default function Game({ game, inLibrary }: GamesProps) {
    const toggleInLibrary = () => {
        const method = inLibrary ? 'delete' : 'post';

        router[method](`/games/${game.slug}/library`);

        router.flush('/library');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Games" />
            <div className="flex gap-4 p-4">
                <div className="w-80">
                    <GameCover game={game} />
                </div>
                <div className="space-y-1">
                    <h1 className="text-xl font-bold">{game.name}</h1>
                    <div className="flex items-center gap-1">
                        <StarIcon className="size-4 text-yellow-500" />
                        <p>{game.rating}</p>
                    </div>
                    <div className="text-muted-foreground space-y-1 pt-3 text-sm">
                        <p className="max-w-md">{game.summary}</p>
                        <p>{moment(game.release_date).format('LL')}</p>
                    </div>
                    <Button variant={inLibrary ? 'destructive' : 'default'} className="mt-4" onClick={toggleInLibrary}>
                        {inLibrary ? 'Remove from library' : 'Add to library'}
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
}

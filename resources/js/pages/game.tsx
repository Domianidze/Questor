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
    isFavorite: boolean;
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

export default function Game({ game, inLibrary, isFavorite }: GamesProps) {
    const toggleInLibrary = () => {
        if (inLibrary) {
            router.delete(`/games/${game.id}/library`, { preserveScroll: true });
        } else {
            router.post(`/games/${game.id}/library`, undefined, { preserveScroll: true });
        }

        router.flush('/library');
    };

    const toggleIsFavorite = () => {
        if (isFavorite) {
            router.delete(`/games/${game.id}/favorite`, { preserveScroll: true });
        } else {
            router.post(`/games/${game.id}/favorite`, undefined, { preserveScroll: true });
        }

        router.flush('/library');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Games" />
            <div className="flex flex-col gap-4 p-4 lg:flex-row">
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
                        <p className="max-w-xs lg:max-w-md">{game.summary}</p>
                        <p>{moment(game.release_date).format('LL')}</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 pt-4 lg:flex-row">
                        <Button variant={inLibrary ? 'destructive' : 'default'} onClick={toggleInLibrary}>
                            {inLibrary ? 'Remove from library' : 'Add to library'}
                        </Button>
                        {inLibrary && (
                            <Button variant={isFavorite ? 'destructive' : 'default'} onClick={toggleIsFavorite}>
                                {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

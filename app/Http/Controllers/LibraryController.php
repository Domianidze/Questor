<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LibraryController extends Controller
{
    public function __invoke()
    {
        $favorites = auth()->user()->games()->wherePivot('favorite', true)->get();
        $games = auth()->user()->games()->wherePivot('favorite', false)->paginate(15);

        return Inertia::render('library', compact('favorites', 'games'));
    }
}


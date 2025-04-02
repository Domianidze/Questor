<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LibraryController extends Controller
{
    public function __invoke()
    {
        $games = auth()->user()->games()->paginate(15);

        return Inertia::render('library', compact('games'));
    }
}


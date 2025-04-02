<?php

use App\Http\Controllers\GameController;
use App\Http\Controllers\LibraryGameController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('games', [GameController::class, 'index'])->name('games');
    Route::get('games/{game:slug}', [GameController::class, 'show'])->name('game');
    Route::post('games/{game:slug}/library', [LibraryGameController::class, 'store'])->name('game.library.store');
    Route::delete('games/{game:slug}/library', [LibraryGameController::class, 'destroy'])->name('game.library.delete');

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

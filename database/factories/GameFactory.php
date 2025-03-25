<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Game>
 */
class GameFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'slug' => fake()->slug(),
            'name' => fake()->name(),
            'cover' => fake()->imageUrl(),
            'summary' => fake()->paragraph(),
            'rating' => fake()->randomFloat(1, 0, 10),
            'release_date' => fake()->unixTime(),
        ];
    }
}

import { Pokemon } from '@/components/pokemon/pokemon';
import React from 'react';
import { effect } from 'zod/v3';

export default function Pokemons({ pokemons }) {
	return (
		<div>
			<h1>List of Pokemon</h1>
			{pokemons.map((pokemon) => {
				return (
					<div key={pokemon.id}>
						<p>{pokemon.effect}</p>
						<p>{pokemon.name}</p>
					</div>
				);
			})}
		</div>
	);
}

export async function getServerProps() {
	const res = await fetch('https://pokeapi.co/api/v2/ability/battle-armor');
	const data = await res.json();

	return { props: { data } };
}

import React from 'react';

function Pokemon(pokemon) {
	return (
		<div>
			<table>
				<tr>
					<th>{pokemon.effect}</th>
				</tr>
				<tr>
					<th>{pokemon.name}</th>
				</tr>
			</table>
		</div>
	);
}

export { Pokemon };

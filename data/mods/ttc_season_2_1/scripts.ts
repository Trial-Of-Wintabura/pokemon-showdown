import { ModifyPokemon } from "../../../tools/utils/modifyPokemon";

export const Scripts: ModdedBattleScriptsData = {
	inherit: 'ttc_season_2_0',
	init() {
		// Version 2.1.0
		new ModifyPokemon('Uxie', this)
			.types
				.setType('Psychic', 'Steel')
			.pokemon.learnset
				.add('Iron Head')
				.add('Flash Cannon')
				.add('Autotomize')
				.add('Doom Desire')
				.add('Smart Strike');
		new ModifyPokemon('Mesprit', this)
			.learnset
				.add('Moonblast')
				.add('Alluring Voice')
				.add('Moonlight')
				.add('Play Rough')
				.add('Misty Explosion');
	},
}
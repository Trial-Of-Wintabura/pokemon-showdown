import { ModifyPokemon } from "../../../tools/utils/modifyPokemon";

export const Scripts: ModdedBattleScriptsData = {
	inherit: 'ttc_season_1_3',
	init() {
		// Flam - $15 donation
		new ModifyPokemon('Altaria', this)
			.types
				.setType('Dragon', 'Fairy')
			.pokemon.abilities
				.setAbility1('Levitate')
				.setHiddenAbility('Fluffy')
			.pokemon.baseStats
				.setATK(45)
				.setDEF(105)
				.setSPA(110)
				.setSPD(110)
				.setSPE(85)
			.pokemon.learnset
				.add('Thunderbolt');
		// Ainka - $50 donation
		new ModifyPokemon('Minior', this)
			.baseStats
				.setATK(110)
				.setDEF(50)
				.setSPA(110)
				.setSPD(50)
			.pokemon.learnset
				.remove('Shell Smash')
				.add('Wish')
				.add('Lunar Blessing')
				.add('Memento')
				.add('Moonlight')
				.add('Work Up')
				.add('Flare Blitz')
				.add('Flame Charge')
				.add('Burn Up')
				.add('Parting Shot')
				.add('Diamond Storm')
				.add('Spikes')
				.add('Encore')
				.add('Stored Power');
		new ModifyPokemon('Minior-Meteor', this)
			.baseStats
				.setDEF(120)
				.setSPD(120)
				.setSPE(80);

		// Apollo Chaoz
		//#region Sychronoise
		const addToPokemon = [
			'mew',
			'jirachi',
			'meloetta',
			'mesprit',
			'uxie',
			'azelf',
			'calyrex',
			'zoroark',
			'espeon',
			'lucario',
			'ralts',
			'kirlia',
			'gardevoir',
			'gallade',
			'girafarig',
			'psyduck',
			'golduck',
			'hoothoot',
			'noctowl',
			'whismur',
			'loudred',
			'exploud',
			'natu',
			'xatu',
			'kecleon',
			'chimecho',
			'chatot',
			'munna',
			'musharna',
			'sigilyph',
			'woobat',
			'swoobat',
			'elgyem',
			'beheeyem',
			'gothita',
			'gothitelle',
			'gothorita',
		];

		for (const pokemon of addToPokemon) {
			this.modData('Learnsets', pokemon).learnset['synchronise'] = ['9M'];
		}
		//#endregion
	},
};
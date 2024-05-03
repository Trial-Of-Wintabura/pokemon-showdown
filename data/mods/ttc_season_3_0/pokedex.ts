export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	meowthmega: { // TTC Staff
		num: -3001,
		name: "Meowth-Mega",
		baseSpecies: "Meowth",
		forme: "Mega",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 40, atk: 115, def: 75, spa: 110, spd: 70, spe: 160},
		abilities: {0: "Hail The Coin"},
		heightm: 0.4,
		weightkg: 4.2,
		eggGroups: ["Field"],
		requiredItem: "Meowthite",
		tags: ["Fakemon"],
	},
	eeveemega: { // TTC Staff
		num: -3002,
		name: "Eevee-Mega",
		baseSpecies: "Eevee-Starter",
		forme: "Mega",
		types: ["Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 55, atk: 108, def: 105, spa: 108, spd: 110, spe: 99},
		abilities: {0: "Gambler's Luck"},
		heightm: 0.3,
		weightkg: 6.5,
		eggGroups: ["Undiscovered"],
		requiredItem: "Eeveeite",
		tags: ["Fakemon"],
	},

	//#region Firework Event

	goopli: { // PT333
		num: -3003,
		name: "Goopli",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 60, atk: 50, def: 35, spa: 54, spd: 70, spe: 21},
		abilities: {0: "Illuminate", 1: "Sticky Hold", H: "Liquid Ooze"},
		heightm: 0.2,
		weightkg: 10.0,
		eggGroups: ["Undiscovered"],
		evos: ["Slugoliath"],
		tags: ["Fakemon"],
	},
	slugoliath: { // PT333
		num: -3004,
		name: "Slugoliath",
		types: ["Fire", "Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 90, def: 85, spa: 94, spd: 120, spe: 51},
		abilities: {0: "Lava Surfer", 1: "Sticky Hold", H: "Liquid Ooze"},
		heightm: 0.3,
		weightkg: 20.0,
		prevo: "Goopli",
		evoLevel: 34,
		eggGroups: ["Undiscovered"],
		tags: ["Fakemon"]
	},

	//#endregion
};
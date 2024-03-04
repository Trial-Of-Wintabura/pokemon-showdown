export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	//#region Season 1 Donations
	sotanaht: {
		num: -2001,
		name: "Sotanaht",
		types: ["Ghost", "Fire"],
		abilities: { 0: "Vampire", 1: "Cursed Body", H: "Aftermath" },
		baseStats: {hp: 104, atk: 96, def: 91, spa: 54, spd: 93, spe: 90},
		heightm: 3.7,
		weightkg: 55,
		color: "White",
		tags: ["Fakemon"],
		eggGroups: ["Field", "Dragon"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	tindraco: {
		num: -2002,
		name: "Tindraco",
		types: ["Normal", "Dragon"],
		abilities: { 0: "Oblivious", 1: "Immunity", H: "Unaware" },
		baseStats: {hp: 45, atk: 55, def: 55, spa: 55, spd: 55, spe: 45},
		heightm: 0.6,
		weightkg: 33.6,
		color: "White",
		evos: ["Devdraco"],
		tags: ["Fakemon"],
		eggGroups: ["Dragon"],
		tier: "LC",
		natDexTier: "LC",
		doublesTier: "LC",
	},
	devdraco: {
		num: -2003,
		name: "Devdraco",
		types: ["Normal", "Dragon"],
		abilities: {0: "Intimidate", 1: "Immunity", H: "Wonder Skin"},
		baseStats: {hp: 55, atk: 75, def: 80, spa: 75, spd: 80, spe: 60},
		heightm: 1.2,
		weightkg: 47.0,
		color: "White",
		prevo: "Tindraco",
		evoLevel: 30,
		evos: ["Metadraco", "Acudraco", "Thundraco"],
		tags: ["Fakemon"],
		eggGroups: ["Dragon"],
		tier: "NFE",
		natDexTier: "NFE",
		doublesTier: "NFE",
	},
	metadraco: {
		num: -2004,
		name: "Metadraco",
		types: ["Steel", "Dragon"],
		abilities: {0: "Full Metal Body", 1: "Reckless", H: "Moxie"},
		baseStats: {hp: 100, atk: 130, def: 94, spa: 90, spd: 89, spe: 87},
		heightm: 2.1,
		weightkg: 292.7,
		color: "Gray",
		prevo: "Devdraco",
		evoType: "other",
		evoCondition: "Take the War Path of the Dragon",
		tags: ["Fakemon"],
		eggGroups: ["Dragon"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	acudraco: {
		num: -2005,
		name: "Acudraco",
		types: ["Psychic", "Dragon"],
		abilities: {0: "Power of Alchemy", 1: "Aura Break", H: "Forewarn"},
		baseStats: {hp: 80, atk: 110, def: 100, spa: 110, spd: 100, spe: 90},
		heightm: 2.1,
		weightkg: 248.2,
		color: "Black",
		prevo: "Devdraco",
		evoType: "other",
		evoCondition: "Take the Knowledge Path of the Dragon",
		tags: ["Fakemon"],
		eggGroups: ["Dragon"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	thundraco: {
		num: -2006,
		name: "Thundraco",
		types: ["Electric", "Dragon"],
		abilities: {0: "Motor Drive", 1: "Immunity", H: "Levitate"},
		baseStats: {hp: 91, atk: 80, def: 95, spa: 134, spd: 100, spe: 90},
		heightm: 2.1,
		weightkg: 226.7,
		color: "Yellow",
		evoType: "other",
		evoCondition: "Obtain the blessing of Zeus",
		tags: ["Fakemon"],
		eggGroups: ["Dragon"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	farfetchd: {
		inherit: true,
		otherFormes: ['Farfetch\u2019d-Mega', 'Farfetch\u2019d-Galar'],
		formeOrder: ['Farfetch\u2019d', 'Farfetch\u2019d-Mega', 'Farfetch\u2019d-Galar'],
	},
	farfetchdmega: {
		num: -2007,
		name: 'Farfetch\u2019d-Mega',
		types: ['Dark', 'Flying'],
		baseSpecies: 'Farfetch\u2019d',
		forme: 'Mega',
		baseStats: {hp: 65, atk: 123, def: 82, spa: 76, spd: 82, spe: 108},
		abilities: {0: 'Sharpened Leek'},
		heightm: 0.8,
		weightkg: 15,
		color: "Brown",
		tags: ["Fakemon"],
		eggGroups: ['Flying', 'Field'],
		requiredItem: "Stick",
		requiredMove: "Leek Lunge",
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	volcarona: {
		inherit: true,
		otherFormes: ["Volcarona-Faerie"],
		formeOrder: ["Volcarona", 'Volcarona-Faerie'],
	},
	volcaronafaerie: {
		num: -2008,
		name: 'Volcarona-Faerie',
		baseSpecies: 'Volcarona',
		forme: 'Faerie',
		types: ['Fire', 'Fairy'],
		abilities: {0: 'Flash Fire', 1: 'Unnerve', H: 'Magic Guard'},
		baseStats: {hp: 85, atk: 60, def: 65, spa: 135, spd: 105, spe: 100},
		heightm: 1.6,
		weightkg: 46,
		color: "White",
		prevo: "Larvesta",
		evoType: "other",
		evoCondition: "You must be one with the fariy",
		tags: ["Fakemon"],
		eggGroups: ["Bug"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	poisonus: {
		num: -2009,
		name: "Poisonus",
		baseForme: "Incarnate",
		types: ["Poison", "Flying"],
		gender: "M",
		baseStats: {hp: 109, atk: 105, def: 80, spa: 115, spd: 90, spe: 81},
		abilities: {0: "Magic Bounce", H: "Gluttony"},
		heightm: 1.5,
		weightkg: 100,
		color: "Purple",
		tags: ["Sub-Legendary", "Fakemon"],
		eggGroups: ["Undiscovered"],
		otherFormes: ["Poisonus-Therian"],
		formeOrder: ["Poisonus", "Poisonus-Therian"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	poisonustherian: {
		num: -2009,
		name: "Poisonus-Therian",
		baseSpecies: "Poisonus",
		forme: "Therian",
		types: ["Poison", "Flying"],
		gender: "M",
		baseStats: {hp: 109, atk: 125, def: 90, spa: 85, spd: 80, spe: 91},
		abilities: {0: "Magic Guard", H: "Cud Chew"},
		heightm: 2.3,
		weightkg: 120,
		color: "Gray",
		tags: ["Sub-Legendary", "Fakemon"],
		eggGroups: ["Undiscovered"],
		changesFrom: "Poisonus",
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	ralts: {
		inherit: true,
		otherFormes: ["Ralts-Olympios"],
		formeOrder: ["Ralts", "Ralts-Olympios"],
	},
	raltsolympios: {
		num: 280,
		name: "Ralts-Olympios",
		baseSpecies: "Ralts",
		forme: "Olympios",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 28, atk: 25, def: 25, spa: 45, spd: 35, spe: 40},
		abilities: {0: "Competitive", 1: "Cute Charm", H: "Tangling Hair"},
		heightm: 0.4,
		weightkg: 6.6,
		color: "Dark Grey",
		evos: ["Kirlia-Olympios"],
		tags: ["Fakemon"],
		eggGroups: ["Human-Like", "Amorphous"],
		tier: "LC",
		natDexTier: "LC",
		doublesTier: "LC",
	},
	kirlia: {
		inherit: true,
		otherFormes: ["Kirlia-Olympios"],
		formeOrder: ["Kirlia", "Kirlia-Olympios"],
	},
	kirliaolympios: {
		num: 281,
		name: "Kirlia-Olympios",
		baseSpecies: "Kirlia",
		forme: "Olympios",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 38, atk: 35, def: 35, spa: 65, spd: 55, spe: 50},
		abilities: {0: "Competitive", 1: "Cute Charm", H: "Tangling Hair"},
		heightm: 0.8,
		weightkg: 20.2,
		color: "Dark Grey",
		prevo: "Ralts-Olympios",
		evoLevel: 20,
		evos: ["Gardevoir-Olympios", "Gallade-Olympios"],
		tags: ["Fakemon"],
		eggGroups: ["Human-Like", "Amorphous"],
		tier: "NFE",
		natDexTier: "NFE",
		doublesTier: "NFE",
	},
	gardevoir: {
		inherit: true,
		otherFormes: ["Gardevoir-Mega","Gardevoir-Olympios"],
		formeOrder: ["Gardevoir", "Gardevoir-Mega", "Gardevoir-Olympios"],
	},
	gardevoirolympios: {
		num: 282,
		name: "Gardevoir-Olympios",
		baseSpecies: "Gardevoir",
		forme: "Olympios",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80},
		abilities: {0: "Competitive", 1: "Petrifying Gaze", H: "Queenly Majesty"},
		heightm: 1.6,
		weightkg: 48.4,
		color: "Dark Grey",
		prevo: "Kirlia-Olympios",
		tags: ["Fakemon"],
		eggGroups: ["Human-Like", "Amorphous"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	gallade: {
		inherit: true,
		otherFormes: ["Gallade-Mega", "Gallade-Olympios"],
		formeOrder: ["Gallade", "Gallade-Mega", "Gallade-Olympios"],
	},
	galladeolympios: {
		num: 475,
		name: "Gallade-Olympios",
		baseSpecies: "Gallade",
		forme: "Olympios",
		types: ["Ground", "Fighting"],
		baseStats: {hp: 68, atk: 125, def: 65, spa: 65, spd: 115, spe: 80},
		abilities: {0: "Sharpness", 1: "Mold Breaker", H: "Aura Break"},
		heightm: 1.6,
		weightkg: 52,
		color: "Dark Grey",
		prevo: "Kirla-Olympios",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		tags: ["Fakemon"],
		eggGroups: ["Human-Like", "Amorphous"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	shuckle: {
		inherit: true,
		evos: ["Gigachelonian"],
	},
	gigachelonian: {
		num: -2010,
		name: "Gigachelonian",
		types: ["Bug", "Rock"],
		baseStats: {hp: 45, atk: 85, def: 200, spa: 5, spd: 200, spe: 35},
		abilities: {0: "Dry Skin", 1: "Anger Shell", H: "Contrary"},
		heightm: 1.0,
		weightkg: 50.5,
		color: "Yellow",
		tags: ["Fakemon"],
		eggGroups: ["Bug"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	//#endregion
	//#region Season 1 Halloween
	bulbick: {
		num: -1031,
		name: "Bulbick",
		types: ["Water", "Electric"],
		abilities: {0: "Dazzling", 1: "Illuminate", H: "Haunted Light"},
		baseStats: {hp: 60, atk: 25, def: 40, spa: 75, spd: 65, spe: 10},
		heightm: 0.3,
		weightkg: 3.1,
		color: "White",
		evos: ["Lampoct"],
		tags: ["Fakemon"],
		eggGroups: ["Amorphous"],
		tier: "LC",
		natDexTier: "LC",
		doublesTier: "LC",
	},
	lampoct: {
		num: -1032,
		name: "Lampoct",
		types: ["Water", "Electric"],
		abilities: {0: "Dazzling", 1: "Illuminate", H: "Haunted Light"},
		baseStats: {hp: 70, atk: 40, def: 50, spa: 85, spd: 70, spe: 55},
		heightm: 0.6,
		weightkg: 13,
		color: "White",
		prevo: "Bulbick",
		evoLevel: 41,
		evos: ["Octolure"],
		tags: ["Fakemon"],
		eggGroups: ["Amorphous"],
		tier: "NFE",
		natDexTier: "NFE",
		doublesTier: "NFE",
	},
	octolure: {
		num: -1033,
		name: "Octolure",
		types: ["Water", "Electric"],
		abilities: {0: "Dazzling", 1: "Illuminate", H: "Haunted Light"},
		baseStats: {hp: 82, atk: 50, def: 62, spa: 150, spd: 84, spe: 92},
		heightm: 1,
		weightkg: 34.3,
		color: "White",
		prevo: "Lampoct",
		evoType: "useItem",
		evoItem: "Water Stone",
		tags: ["Fakemon"],
		eggGroups: ["Amorphous"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	gourgeist: {
		inherit: true,
		otherFormes: ["Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super", "Gourgeist-Mega"],
		formeOrder: ["Gourgeist", "Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super", "Gourgeist-Mega"],
	},
	gourgeistmega: {
		num: 0,
		name: "Gourgeist-Mega",
		baseSpecies: "Gourgeist",
		forme: "Mega",
		types: ["Grass", "Ghost"],
		gender: "N",
		baseStats: {hp: 65, atk: 100, def: 122, spa: 133, spd: 105, spe: 54},
		abilities: {0: "Eerie Cry"},
		heightm: 0.9,
		weightkg: 12.5,
		color: "Black",
		tags: ["Fakemon"],
		eggGroups: ["Undiscovered"],
		requiredItem: "Gourgeisite",
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	//#endregion
	//#region Season 1 Thanksgiving
	trevenant: {
		inherit: true,
		otherFormes: ["Trevenant-Autumn"],
		formeOrder: ["Trevenant", "Trevenant-Autumn"],
	},
	trevenantautumn: {
		num: 709,
		name: "Trevenant-Autumn",
		baseSpecies: "Trevenant",
		forme: 'Autumn',
		types: ["Grass", "Ghost"],
		baseStats: {hp: 91, atk: 125, def: 83, spa: 65, spd: 82, spe: 56},
		abilities: {0: "Wandering Spirit", 1: "Harvest", H: "Justified"},
		heightm: 1.5,
		weightkg: 71,
		color: "Orange",
		prevo: 'Phantump',
		evoType: "trade",
		tags: ["Fakemon"],
		eggGroups: ["Grass", "Amorphous"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	//#endregion
	//#region Season 1 Winter
	jirachi: {
		inherit: true,
		otherFormes: ["Jirachi-NorthStar"],
		formeOrder: ["Jirachi", "Jirachi-NorthStar"],
	},
	jirachinorthstar: {
		num: 385,
		name: "Jirachi-NorthStar",
		baseSpecies: "Jirachi",
		forme: "NorthStar",
		types: ["Ice", "Fairy"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 110, spa: 100, spd: 110, spe: 80},
		abilities: {0: "Illuminate"},
		heightm: 0.3,
		weightkg: 1.1,
		color: "Blue",
		tags: ["Mythical", "Fakemon"],
		eggGroups: ["Undiscovered"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	meloetta: {
		inherit: true,
		otherFormes: ["Meloetta-Pirouette", "Meloetta-Caroler", "Meloetta-Aurora"],
		formeOrder: ["Meloetta", "Meloetta-Pirouette", "Meloetta-Caroler", "Meloetta-Aurora"],
	},
	meloettacaroler: {
		num: 648,
		name: "Meloetta-Caroler",
		baseSpecies: "Meloetta",
		forme: "Caroler",
		types: ["Ice", "Normal"],
		gender: "N",
		baseStats: {hp: 100, atk: 77, def: 77, spa: 128, spd: 128, spe: 90},
		abilities: {0: "Frigid Inspiration"},
		heightm: 0.6,
		weightkg: 6.5,
		color: "White",
		eggGroups: ["Undiscovered"],
		tags: ["Mythical", "Fakemon"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	meloettaaurora: {
		num: 648,
		name: "Meloetta-Aurora",
		baseSpecies: "Meloetta",
		forme: "Aurora",
		types: ["Ice", "Fairy"],
		gender: "N",
		baseStats: {hp: 100, atk: 128, def: 90, spa: 77, spd: 77, spe: 128},
		abilities: {0: "Frigid Inspiration"},
		heightm: 0.6,
		weightkg: 6.5,
		color: "White",
		tags: ["Fakemon"],
		eggGroups: ["Undiscovered"],
		requiredMove: "Snowtime Song",
		tier: "Illegal",
		battleOnly: "Meloetta-Caroler",
	},
	//#endregion
	//#region Version 1.1
	silvallybug: {
		inherit: true,
		requiredItem: undefined
	},
	silvallydark: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallydragon: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallyelectric: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallyfairy: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallyfighting: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallyfire: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallyflying: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallyghost: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallygrass: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallyground: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallyice: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallypoison: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallypsychic: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallyrock: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallysteel: {
		inherit: true,
		requiredItem: undefined,
	},
	silvallywater: {
		inherit: true,
		requiredItem: undefined,
	},
	//#endregion
};
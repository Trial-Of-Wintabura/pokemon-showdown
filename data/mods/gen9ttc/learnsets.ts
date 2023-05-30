/* eslint-disable max-len*/

export const Learnsets: {[k: string]: ModdedLearnsetData} = {
	venusaur: {
		inherit: true,
		learnset: {
			sludgewave: ['8M'],
			acidspray: ['8M'],
			gastroacid: ['8M'],
		}
	},
	charizard: {
		inherit: true,
		learnset: {
			firelash: ['8M'],
			uturn: ['8M'],
			burnup: ['8M'],
		}
	},
	blastoise: {
		inherit: true,
		learnset: {
			hydrosteam: ["9M"],
			steameruption: ["8M"],
		}
	},
	butterfree: {
		inherit: true,
		learnset: {
			lightscreen: ["8M"],
			aromatherapy: ["8M"],
			stickyweb: ["8M"],
			psyshock: ["8M"],
			luminacrash: ["9M"],
			trickroom: ["8M"],
			// needed to add this in, since butterfree learns more moves than it's prevos
			acrobatics: ["8M", "7M", "6M", "5M"],
			aerialace: ["7M", "6M", "5M", "4M", "3M", "3S0"],
			aircutter: ["5D", "4T"],
			airslash: ["8M", "8L24", "8V", "7L43"],
			attract: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			batonpass: ["8M"],
			bide: ["7V"],
			bugbite: ["8L1", "7T", "6T", "5T", "4T"],
			bugbuzz: ["8M", "8L32", "8V", "7L31", "6L42", "5L42", "4L40"],
			captivate: ["7L37", "6L40", "5L40", "4M", "4L36"],
			confide: ["7M", "6M"],
			confusion: ["8L8", "8V", "7L1", "7V", "6L1", "5L1", "5D", "4L1", "3L1"],
			curse: ["7V"],
			defog: ["7T", "4M"],
			doubleedge: ["7V", "3T"],
			doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
			drainingkiss: ["8M"],
			dreameater: ["8V", "7M", "6M", "5M", "4M", "3T"],
			dualwingbeat: ["8T"],
			electroweb: ["8M", "7T", "6T", "5T"],
			endure: ["8M", "7V", "4M", "3T"],
			energyball: ["8M", "7M", "6M", "5M", "4M"],
			facade: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			flash: ["7V", "6M", "5M", "4M", "3M"],
			frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
			gigadrain: ["8M", "7T", "7V", "6T", "5T", "4M", "3M"],
			gigaimpact: ["8M", "7M", "6M", "5M", "4M"],
			gust: ["8L0", "8V", "7L1", "7V", "6L16", "5L16", "4L16", "3L28"],
			harden: ["8L1"],
			headbutt: ["8V"],
			hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
			hurricane: ["8M"],
			hyperbeam: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			infestation: ["7M", "6M"],
			irondefense: ["8M"],
			megadrain: ["8V", "7V"],
			mimic: ["7V", "3T"],
			morningsun: ["3S0"],
			naturalgift: ["4M"],
			nightmare: ["7V", "3T"],
			ominouswind: ["4T"],
			poisonpowder: ["8L12", "8V", "7L13", "7V", "6L12", "5L12", "4L12", "3L13"],
			pollenpuff: ["8M"],
			protect: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			psybeam: ["8L16", "8V", "7L17", "7V", "6L24", "5L24", "4L24", "3L34"],
			psychic: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M", "3S0"],
			psychup: ["7M", "6M", "5M", "4M"],
			psywave: ["7V"],
			quiverdance: ["8L44", "8V", "7L47", "6L46", "5L46"],
			rage: ["7V"],
			ragepowder: ["8L40", "7L35", "6L34", "5L34"],
			raindance: ["8M", "7M", "6M", "5M", "4M", "3M"],
			razorwind: ["7V"],
			reflect: ["8V", "7V"],
			rest: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			return: ["7M", "7V", "6M", "5M", "4M", "3M"],
			roost: ["8V", "7M", "6M", "5T", "5D", "4M"],
			round: ["8M", "7M", "6M", "5M"],
			safeguard: ["8M", "8L28", "7M", "7L25", "7V", "6M", "6L36", "5M", "5L36", "4M", "4L34", "3M", "3L40"],
			secretpower: ["6M", "4M", "3M"],
			shadowball: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			signalbeam: ["7T", "6T", "5T", "4T"],
			silverwind: ["7L19", "6L28", "5L28", "4M", "4L28", "3L47"],
			skillswap: ["8M", "7T", "6T", "5T", "4M", "3M"],
			sleeppowder: ["8L12", "8V", "7L13", "7V", "6L12", "5L12", "4L12", "3L15", "3S0"],
			sleeptalk: ["8M", "7M", "7V", "6M", "5T", "4M", "3T"],
			snore: ["8M", "7T", "7V", "6T", "5T", "4T", "3T"],
			solarbeam: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			stringshot: ["8L1", "4T"],
			strugglebug: ["6M", "5M"],
			stunspore: ["8L12", "8V", "7L13", "7V", "6L12", "5L12", "4L12", "3L14"],
			substitute: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			sunnyday: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			supersonic: ["8L4", "8V", "7L23", "7V", "6L18", "5L18", "4L18", "3L18"],
			swagger: ["7M", "7V", "6M", "5M", "4M", "3T"],
			sweetscent: ["7V"],
			swift: ["8M", "7V", "4T", "3T"],
			tackle: ["8L1"],
			tailwind: ["8L36", "7T", "7L41", "6T", "6L30", "5T", "5L30", "4T", "4L30"],
			takedown: ["7V"],
			teleport: ["8V", "7V"],
			thief: ["8M", "7M", "6M", "5M", "4M", "3M"],
			toxic: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			twister: ["4T"],
			uturn: ["8M", "8V", "7M", "6M", "5M", "4M"],
			venoshock: ["8M", "7M", "6M", "5M"],
			whirlwind: ["8L20", "8V", "7L29", "7V", "6L22", "5L22", "4L22", "3L23"],
		}
	},
	beedrill: {
		inherit: true,
		learnset: {
			crosspoison: ["8M"],
			dualwingbeat: ["8M"],
			firstimpression: ["8M"],
			// Needed to add this since beedrill learns more moves than it's prevos.
			acrobatics: ["7M", "6M", "5M"],
			aerialace: ["7M", "6M", "5M", "4M", "3M"],
			agility: ["8V", "7L38", "7V", "6L31", "5L31", "4L31", "3L40"],
			aircutter: ["5D", "4T"],
			assurance: ["7L26", "6L34", "5L34", "4L34"],
			attract: ["7M", "7V", "6M", "5M", "4M", "3M"],
			batonpass: ["3S0"],
			bide: ["7V"],
			brickbreak: ["8V", "7M", "6M", "5M", "4M", "3M"],
			brutalswing: ["7M"],
			bugbite: ["7T", "6T", "5T", "4T"],
			captivate: ["4M"],
			confide: ["7M", "6M"],
			curse: ["7V"],
			cut: ["7V", "6M", "5M", "4M", "3M"],
			defog: ["7T", "4M"],
			doubleedge: ["7V", "3T"],
			doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
			drillrun: ["8V", "7T", "6T", "5T"],
			electroweb: ["7T", "6T", "5T"],
			endeavor: ["7T", "7L41", "6T", "6L40", "5T", "5L40", "4T", "4L40", "3L45"],
			endure: ["7V", "4M", "3T"],
			facade: ["8V", "7M", "6M", "5M", "4M", "3M"],
			falseswipe: ["7M", "6M", "5M", "4M"],
			fellstinger: ["7L44", "6L45"],
			flash: ["6M", "5M", "4M"],
			focusenergy: ["8V", "7L20", "7V", "6L13", "5L13", "4L13", "3L15"],
			frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
			furyattack: ["8V", "7L1", "7V", "6L1", "5L1", "5D", "4L1", "3L1"],
			furycutter: ["7V", "5D", "4T", "3T"],
			gigadrain: ["7T", "7V", "6T", "5T", "4M", "3M"],
			gigaimpact: ["7M", "6M", "5M", "4M"],
			headbutt: ["8V"],
			hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
			hyperbeam: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			infestation: ["7M", "6M"],
			knockoff: ["7T", "6T", "5T", "4T"],
			laserfocus: ["7T"],
			megadrain: ["8V", "7V"],
			mimic: ["7V", "3T"],
			naturalgift: ["4M"],
			ominouswind: ["4T"],
			outrage: ["8V"],
			payback: ["7M", "6M", "5M", "4M"],
			peck: ["8V"],
			pinmissile: ["8V", "7L32", "7V", "6L28", "5L28", "4L28", "3L35"],
			poisonjab: ["8V", "7M", "7L35", "6M", "6L37", "5M", "5L37", "4M", "4L37"],
			protect: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			pursuit: ["7L17", "7V", "6L22", "5L22", "4L22", "3L30"],
			rage: ["8V", "7L14", "7V", "6L19", "5L19", "4L19", "3L25"],
			reflect: ["8V", "7V"],
			rest: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			return: ["7M", "7V", "6M", "5M", "4M", "3M"],
			rocksmash: ["6M", "5M", "4M", "3M"],
			roost: ["8V", "7M", "6M", "5T", "4M"],
			round: ["7M", "6M", "5M"],
			secretpower: ["6M", "4M", "3M"],
			silverwind: ["4M"],
			skullbash: ["7V"],
			sleeptalk: ["7M", "7V", "6M", "5T", "4M", "3T"],
			sludgebomb: ["8V", "7M", "7V", "6M", "5M", "4M", "3M", "3S0"],
			snore: ["7T", "7V", "6T", "5T", "4T", "3T"],
			solarbeam: ["8V", "7M", "6M", "5M", "4M", "3M"],
			stringshot: ["4T"],
			strugglebug: ["6M", "5M"],
			substitute: ["8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			sunnyday: ["7M", "7V", "6M", "5M", "4M", "3M"],
			swagger: ["7M", "7V", "6M", "5M", "4M", "3T"],
			sweetscent: ["7V"],
			swift: ["7V", "4T", "3T"],
			swordsdance: ["7M", "7V", "6M", "5M", "4M", "3T", "3S0"],
			tailwind: ["7T", "6T", "5T", "4T"],
			takedown: ["7V"],
			thief: ["7M", "6M", "5M", "4M", "3M"],
			throatchop: ["7T"],
			toxic: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			toxicspikes: ["7L29", "6L25", "5L25", "4L25"],
			twineedle: ["8V", "7L1", "7V", "6L16", "5L16", "4L16", "3L20", "3S0"],
			uturn: ["8V", "7M", "6M", "5M", "4M"],
			venoshock: ["7M", "7L23", "6M", "5M"],
			xscissor: ["8V", "7M", "6M", "5M", "4M"],
		}
	},
	pidgeot: {
		inherit: true,
		learnset: {
			bulkup: ["8M"],
			extremespeed: ["8M"],
			aurasphere: ["8M"],
			hypervoice: ["8M"], // For Mega Pidgeot
		},
	},
	raticate: {
		inherit: true,
		learnset: {
			closecombat: ["8M"],
			firefang: ["8M"],
			icefang: ["8M"],
			psychicfang: ["8M"]
		}
	},
	raticatealola: {
		inherit: true,
		learnset: {
			closecombat: ["8M"],
			firefang: ["8M"],
			icefang: ["8M"],
			psychicfang: ["8M"],
			partingshot: ["8M"],
		},
	},
	fearow: {
		inherit: true,
		learnset: {
			swordsdance: ["8M"],
			dualwingbeat: ["8M"],
			beakblast: ["8M"],
			foulplay: ["8M"],
			nightslash: ["8M"],
			falsesurrender: ["8M"],
		},
	},
	arbok: {
		inherit: true,
		learnset: {
			jawlock: ["8M"],
			shedtail: ["9M"],
		},
	},
	pikachu: {
		inherit: true,
		learnset: {
			zippyzap: ["8M"],
		}
	},
	raichu: {
		inherit: true,
		learnset: {
			zippyzap: ["8M"],
		}
	},
	sandslash: {
		inherit: true,
		learnset: {
			spikyshield: ["8M"],
			spinout: ["9M"],
		},
	},
	sandslashalola: {
		inherit: true,
		learnset: {
			spikyshield: ["8M"],
			icespinner: ["9M"],
		},
	},
	nidoking: {
		inherit: true,
		learnset: {
			gunkshot: ["8M"],
			precipiceblades: ["8M"],
		}
	},
	ninetales: {
		learnset: {
			lavaplume: ["8M"],
			darkvoid: ["8M"],
			destinybond: ["8M"],
			nightmare: ["8M"],
			bittermalice: ["8M"],
			nightdaze: ["8M"],
			////////////////////////////////////////////////////
			agility: ["8M"],
			attract: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			bide: ["7V"],
			bodyslam: ["8M", "7V", "3T"],
			burningjealousy: ["8T"],
			calmmind: ["8M", "8V", "7M", "6M", "5M", "4M"],
			captivate: ["4M"],
			confide: ["7M", "6M"],
			confuseray: ["8L1", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			covet: ["7T", "6T", "5T"],
			curse: ["7V"],
			darkpulse: ["8M", "8V", "7M", "6M", "5T", "4M"],
			dig: ["8M", "8V", "7V", "6M", "5M", "4M", "3M"],
			disable: ["8L1"],
			doubleedge: ["7V", "3T"],
			doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
			dreameater: ["8V", "7M", "6M", "5M", "4M"],
			ember: ["8L1", "8V", "7V", "5L1", "4L1", "3L1"],
			encore: ["8M"],
			endure: ["8M", "7V", "4M", "3T"],
			energyball: ["8M", "7M", "6M", "5M"],
			extrasensory: ["8L1"],
			facade: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			faketears: ["8M"],
			fireblast: ["8M", "8L1", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			firespin: ["8M", "8L1", "7V", "3L45"],
			flamecharge: ["7M", "6M", "5M"],
			flamethrower: ["8M", "8L1", "8V", "7M", "7L1", "6M", "6L1", "5M", "4M", "3M"],
			flareblitz: ["8M"],
			foulplay: ["8M", "8V", "7T", "6T", "5T"],
			frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
			gigaimpact: ["8M", "7M", "6M", "5M", "4M"],
			grudge: ["8L1"],
			headbutt: ["8V", "7V", "4T"],
			heatwave: ["8M", "7T", "6T", "5T", "5S0", "4T"],
			hex: ["8M"],
			hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
			hyperbeam: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			hypnosis: ["8V"],
			imprison: ["8M", "8L1", "7L1", "6L1"],
			incinerate: ["8L1", "6M", "5M"],
			inferno: ["8L1"],
			irontail: ["8M", "8V", "7T", "7V", "6T", "5T", "4M", "3M"],
			laserfocus: ["7T"],
			mimic: ["7V", "3T"],
			mysticalfire: ["8M"],
			// nastyplot: ["8M", "8L1", "8V", "7L1", "6L1", "5L1", "4L1"], // Removed This move
			naturalgift: ["4M"],
			ominouswind: ["4T"],
			overheat: ["8M", "7M", "6M", "5M", "4M", "3M"],
			painsplit: ["7T", "6T", "5T", "4T"],
			payback: ["8M", "7M", "6M", "5M", "4M"],
			powerswap: ["8M"],
			protect: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			psychup: ["7M", "6M", "5M", "4M"],
			psyshock: ["8M", "7M", "6M", "5M", "5S0"],
			quickattack: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			rage: ["7V"],
			reflect: ["8V", "7V"],
			rest: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			return: ["7M", "7V", "6M", "5M", "4M", "3M"],
			roar: ["7M", "7V", "6M", "5M", "4M", "3M"],
			roleplay: ["7T", "6T", "5T", "4T"],
			round: ["8M", "7M", "6M", "5M"],
			safeguard: ["8M", "8L1", "7M", "7L1", "7V", "6M", "6L1", "5M", "5L1", "4M", "4L1", "3M", "3L1"],
			scorchingsands: ["8T"],
			secretpower: ["6M", "4M", "3M"],
			shadowball: ["8M"],
			skullbash: ["7V"],
			sleeptalk: ["8M", "7M", "7V", "6M", "5T", "4M", "3T"],
			snore: ["8M", "7T", "7V", "6T", "5T", "4T", "3T"],
			solarbeam: ["8M", "8V", "7M", "6M", "5M", "5S0", "4M"],
			spite: ["8L1", "7T", "6T", "5T", "4T"],
			storedpower: ["8M"],
			substitute: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			sunnyday: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			swagger: ["7M", "7V", "6M", "5M", "4M", "3T"],
			swift: ["8M", "7V", "4T", "3T"],
			tackle: ["8V"],
			tailslap: ["8M"],
			tailwhip: ["8L1", "8V", "7V"],
			takedown: ["7V"],
			toxic: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			weatherball: ["8M"],
			willowisp: ["8M", "8L1", "8V", "7M", "6M", "5M", "5S0", "4M"],
			zenheadbutt: ["8M", "7T", "6T", "5T", "4T"],
		},
	},
	ninetalesalola: {
		inherit: true,
		learnset: {
			haze: ["8M"],
			cillyreception: ["9M"],
			glaciate: ["8M"],
		},
	},
	wigglytuff: {
		inherit: true,
		learnset: {
			moonblast: ["8M"],
		},
	},
	crobat: {
		inherit: true,
		learnset: {
			poisonjab: ["8M"],
			toxicspikes: ["8M"],
			firefang: ["8M"],
			thunderfang: ["8M"],
			icefang: ["8M"],
		},
	},
	vileplume: {
		inherit: true,
		learnset: {
			appleacid: ["8M"],
			trailblaze: ["9M"],
			acidspray: ["8M"],
		},
	},
	parasect: {
		inherit: true,
		learnset: {
			crabhammer: ["8M"],
			grassyglide: ["8M"],
			spore: ["8M"],
			uturn: ["8M"],
			leafblade: ["8M"],
			pounce: ["8M"],
			trailblaze: ["9M"],
		},
	},
	venomoth: {
		inherit: true,
		learnset: {
			hex: ["8M"],
		},
	},
	dugtrio: {
		inherit: true,
		learnset: {
			headlongrush: ["8M"],
		},
	},
	dugtrioalola: {
		inherit: true,
		learnset: {
			headlongrush: ["8M"],
		}
	},
	persian: {
		inherit: true,
		learnset: {
			dazzlinggleam: ["8M"],
			suckerpunch: ["8M"],
		},
	},
	persianalola: {
		inherit: true,
		learnset: {
			suckerpunch: ["8M"],
			nightdaze: ["8M"],
		},
	},
	golduck: {
		inherit: true,
		learnset: {
			teleport: ["8M"],
			expandingforce: ["8M"],
		},
	},
	primeape: {
		inherit: true,
		learnset: {
			knockoff: ["8M"],
		}
	},
	arcanine: {
		inherit: true,
		learnset: {
			thunderwave: ["8M"],
			icefang: ["8M"],
		}
	},
	poliwrath: {
		inherit: true,
		learnset: {
			surgingstrikes: ["8M"],
			flipturn: ["8M"]
		}
	},
	politoed: {
		inherit: true,
		learnset: {
			flipturn: ["8M"],
			lifedew: ["8M"],
		}
	},
	alakazam: {
		learnset: {
			allyswitch: ["8M", "8L15", "7T", "7L36", "6L24", "5M", "5L24"],
			attract: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			// barrier: ["8V"], Removed
			bide: ["7V"],
			bodyslam: ["8M", "7V", "3T"],
			calmmind: ["8M", "8L50", "8V", "7M", "7L41", "6M", "6L41", "5M", "5L42", "4M", "4L36", "3M", "3L33", "3S0"],
			captivate: ["4M"],
			chargebeam: ["7M", "6M", "5M", "4M"],
			confide: ["7M", "6M"],
			confusion: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			// counter: ["7V", "3T"], Removed
			curse: ["7V"],
			dazzlinggleam: ["8M", "8V", "7M", "6M"],
			dig: ["8V", "7V"],
			disable: ["8L1", "8V", "7L18", "7V", "6L18", "5L18", "4L18", "3L18"],
			doubleedge: ["7V", "3T"],
			doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
			drainpunch: ["8M", "7T", "6T", "5T", "4M"],
			dreameater: ["8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			dynamicpunch: ["7V", "3T"],
			embargo: ["7M", "6M", "5M", "4M"],
			encore: ["8M", "8V"],
			endure: ["8M", "7V", "4M", "3T"],
			energyball: ["8M", "7M", "6M", "5M", "4M"],
			expandingforce: ["8T"],
			facade: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			firepunch: ["8M", "8V", "7T", "7V", "6T", "5T", "4T", "3T"],
			flash: ["8V", "7V", "6M", "5M", "4M", "3M"],
			fling: ["8M", "7M", "6M", "5M", "4M"],
			focusblast: ["8M", "7M", "6M", "5M", "4M"],
			focuspunch: ["7T", "6T", "4M", "3M"],
			foulplay: ["8M", "8V", "7T", "6T", "5T"],
			frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
			futuresight: ["8M", "8L45", "7L43", "7V", "6L43", "5L48", "4L42", "3L30", "3S0"],
			gigaimpact: ["8M", "7M", "6M", "5M", "4M"],
			grassknot: ["8M", "7M", "6M", "5M", "4M"],
			gravity: ["7T", "6T", "5T", "4T"],
			guardswap: ["8M"],
			headbutt: ["8V", "7V", "4T"],
			hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
			hyperbeam: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			icepunch: ["8M", "8V", "7T", "7V", "6T", "5T", "4T", "3T"],
			imprison: ["8M"],
			irontail: ["8M", "8V", "7T", "6T", "5T", "4M", "3M"],
			kinesis: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			knockoff: ["7T", "6T", "5T", "4T"],
			laserfocus: ["7T"],
			lightscreen: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			magiccoat: ["7T", "6T", "5T", "4T"],
			magicroom: ["8M", "7T", "6T", "5T"],
			megakick: ["8M", "7V", "3T"],
			megapunch: ["8M", "7V", "3T"],
			metronome: ["8M", "7V", "3T"],
			mimic: ["7V", "3T"],
			miracleeye: ["7L23", "6L22", "5L22", "4L22"],
			nastyplot: ["8M"],
			naturalgift: ["4M"],
			nightmare: ["7V", "3T"],
			nightshade: ["8V"],
			powerswap: ["8M"],
			protect: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			psybeam: ["8L5", "8V", "7L21", "7V", "6L21", "5L28", "4L24", "3L21"],
			psychic: ["8M", "8L35", "8V", "7M", "7L38", "7V", "6M", "6L38", "5M", "5L46", "4M", "4L40", "3M", "3L36", "3S0"],
			psychicterrain: ["8M"],
			psychocut: ["8M", "8L20", "7L28", "6L28", "5L40", "4L34"],
			psychup: ["7M", "7V", "6M", "5M", "4M", "3T"],
			psyshock: ["8M", "8L30", "7M", "6M", "5M"],
			psywave: ["7V"],
			rage: ["7V"],
			raindance: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			recover: ["8L25", "8V", "7L31", "7V", "6L31", "5L36", "4L30", "3L25"],
			recycle: ["7T", "6T", "5T", "4M"],
			reflect: ["8M", "8L10", "8V", "7M", "7L26", "7V", "6M", "6L26", "5M", "5L30", "4M", "4L28", "3M", "3L23"],
			rest: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			return: ["7M", "7V", "6M", "5M", "4M", "3M"],
			roleplay: ["8L40", "7T", "6T", "5T", "4T"],
			round: ["8M", "7M", "6M", "5M"],
			safeguard: ["8M", "7M", "6M", "5M", "4M", "3M"],
			secretpower: ["6M", "4M", "3M"],
			seismictoss: ["8V", "7V", "3T"],
			shadowball: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			shockwave: ["7T", "6T", "4M", "3M"],
			signalbeam: ["7T", "6T", "5T", "4T"],
			skillswap: ["8M", "7T", "6T", "5T", "4M", "3M"],
			skullbash: ["7V"],
			sleeptalk: ["8M", "7M", "7V", "6M", "5T", "4M", "3T"],
			snatch: ["7T", "6T", "5T", "4M", "3M"],
			snore: ["8M", "7T", "7V", "6T", "5T", "4T", "3T"],
			speedswap: ["8M"],
			storedpower: ["8M"],
			submission: ["7V"],
			substitute: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			sunnyday: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			swagger: ["7M", "7V", "6M", "5M", "4M", "3T"],
			swift: ["8M"],
			takedown: ["7V"],
			taunt: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			telekinesis: ["7T", "7L33", "6L33", "5M", "5L34"],
			teleport: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			thief: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			thunderpunch: ["8M", "8V", "7T", "7V", "6T", "5T", "4T", "3T"],
			thunderwave: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			torment: ["7M", "6M", "5M", "4M", "3M"],
			toxic: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			triattack: ["8M", "8V", "7V"],
			trick: ["8M", "7T", "7L46", "6T", "6L46", "5T", "5L52", "4T", "4L46", "3L43", "3S0"],
			trickroom: ["8M", "7M", "6M", "5M", "4M"],
			wonderroom: ["8M", "7T", "6T", "5T"],
			zapcannon: ["7V"],
			zenheadbutt: ["8M", "7T", "6T", "5T", "4T"],
		}
	},
	machamp: {
		inherit: true,
		learnset: {
			drainpunch: ["8M"],
			combattorque: ["9M"],
		},
	},
	victreebel: {
		inherit: true,
		learnset: {
			solarblade: ["8M"],
		},
	},
	tentacruel: {
		inherit: true,
		learnset: {
			flipturn: ["8M"],
			nastyplot: ["8M"],
			octolock: ["8M"],
			spikes: ["8M"],
			recover: ["8M"],
		},
	},
	golem: {
		inherit: true,
		learnset: {
			bodypress: ["8M"],
			headsmash: ["8M"],
			rapidspin: ["8M"],
		},
	}, 
	golemalola: {
		inherit: true,
		learnset: {
			flashcannon: ["8M"],
			powergem: ["8M"],
			steelbeam: ["8M"],
			thousandarrows: ["8M"],
			zapcannon: ["8M"],
		},
	},
	rapidash: {
		inherit: true,
		learnset: {
			firelash: ["8M"],
			jumpkick: ["8M"],
			blazekick: ["8M"],
			bulldoze: ["8M"],
			hornleech: ["8M"],
		},
	},
	rapidashgalar: {
		inherit: true,
		learnset: {
			firelash: ["8M"],
			moonblast: ["8M"],
			lusterpurge: ["8M"],
			psyblade: ["9M"],
			cosmicpower: ["8M"],
		},
	},
	slowbrogalar: {
		inherit: true,
		learnset: {
			teleport: ["8M"],
			toxic: ["8M"],
		},
	},
	slowkinggalar: {
		inherit: true,
		learnset: {
			toxic: ["8M"],
		},
	},
	farfetchd: {
		inherit: true,
		learnset: {
			drillpeck: ["8M"],
			dualwingbeat: ["8M"],
			xscissor: ["8M"],
			aquacutter: ["9M"],
			ceaselessedge: ["8M"],
		},
	},
	farfetchdgalar: {
		inherit: true,
		learnset: {
			sacredsword: ["8M"],
			drillpeck: ["8M"],
			brickbreak: ["8M"],
		},
	},
	sirfetchd: {
		inherit: true,
		learnset: {
			sacredsword: ["8M"],
			roost: ["8M"],
			toxic: ["8M"],
			drillrun: ["8M"],
			behemothblad: ["8M"],
		},
	},
	dodrio: {
		learnset: {
			uturn: ["8M"],
			dualwingbeat: ["8M"],
			tripleaxel: ["8M"],
			earthquake: ["8M"],
			rockslide: ["8M"],
			highhorsepower: ["8M"],
			headsmash: ["8M"],
			///////////////////////////////////////////////
			acupressure: ["7L34", "6L28", "5L28", "4L28"],
			aerialace: ["7M", "6M", "5M", "4M", "3M"],
			agility: ["8V", "7L26", "7V", "6L35", "5L41", "4L41", "3L60", "3S0"],
			aircutter: ["4T"],
			attract: ["7M", "7V", "6M", "5M", "4M", "3M"],
			batonpass: ["3S0"],
			bide: ["7V"],
			bodyslam: ["7V", "3T"],
			captivate: ["4M"],
			confide: ["7M", "6M"],
			curse: ["7V"],
			doubleedge: ["7V", "3T"],
			doublehit: ["7L22"],
			doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
			drillpeck: ["8V", "7L47", "7V", "6L41", "5L47", "4L47", "3L47", "3S0"],
			echoedvoice: ["7M", "6M", "5M"],
			endeavor: ["7T", "7L52", "6T", "6L53", "5T", "5L54", "4T", "4L54"],
			endure: ["7V", "4M", "3T"],
			facade: ["8V", "7M", "6M", "5M", "4M", "3M"],
			//fly: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"], // Removed
			frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
			furyattack: ["8V", "7L12", "7V", "6L13", "5L14", "4L14", "3L1"],
			gigaimpact: ["7M", "6M", "5M", "4M"],
			growl: ["8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			headbutt: ["8V"],
			hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
			hyperbeam: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			jumpkick: ["8V", "7L43"],
			knockoff: ["7T", "6T", "5T", "4T"],
			mimic: ["7V", "3T"],
			mirrormove: ["8V"],
			mudslap: ["7V", "4T", "3T"],
			naturalgift: ["4M"],
			payback: ["7M", "6M", "5M", "4M"],
			peck: ["8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			pluck: ["7L19", "6L1", "5M", "5L1", "4M", "4L1"],
			protect: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			pursuit: ["7L15", "7V", "6L17", "5L19", "4L19", "3L1"],
			quickattack: ["8V", "7L1", "6L1", "5L1", "4L1"],
			rage: ["8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L25"],
			reflect: ["8V", "7V"],
			rest: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			return: ["7M", "7V", "6M", "5M", "4M", "3M"],
			roost: ["8V", "7M", "6M", "5T", "4M"],
			round: ["7M", "6M", "5M"],
			secretpower: ["6M", "4M", "3M"],
			skullbash: ["7V"],
			skyattack: ["7T", "7V", "6T", "5T", "4T", "3T"],
			sleeptalk: ["7M", "7V", "6M", "5T", "4M", "3T"],
			snore: ["7T", "7V", "6T", "5T", "4T", "3T"],
			steelwing: ["7M", "7V", "6M", "4M", "3M"],
			stompingtantrum: ["7T"],
			substitute: ["8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			sunnyday: ["7M", "7V", "6M", "5M", "4M", "3M"],
			supersonic: ["8V"],
			swagger: ["7M", "7V", "6M", "5M", "4M", "3T"],
			swift: ["7V", "4T", "3T"],
			swordsdance: ["8V", "7M", "7L38"],
			takedown: ["7V"],
			taunt: ["8V", "7M", "6M", "5M", "4M", "3M"],
			thief: ["7M", "7V", "6M", "5M", "4M", "3M"],
			thrash: ["8V", "7L56", "6L59", "5L60"],
			torment: ["7M", "6M", "5M", "4M", "3M"],
			toxic: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			triattack: ["8V", "7L1", "7V", "6L25", "5L34", "4L34", "3L21", "3S0"],
			uproar: ["7T", "7L29", "6T", "6L23", "5T", "5L23", "4T", "4L23", "3L38"],
			whirlwind: ["7V"],
			workup: ["7M", "5M"],
		},
	},
	dewgong: {
		inherit: true,
		learnset: {
			scald: ["8M"],
			flipturn: ["8M"],
			hydropump: ["8M"],
			megahorn: ["8M"],
			freezedry: ["8M"],
			chillingwater: ["8M"],
		},
	},
	muk: {
		learnset: {
			poisonfang: ["8M"],
			//////////////////////////////
			acidarmor: ["9L46", "8V", "7L46", "7V", "6L43", "5L42", "4L44", "3L34"],
			acidspray: ["9M"],
			attract: ["7M", "7V", "6M", "5M", "4M", "3M"],
			belch: ["9L52", "7L52", "6L52"],
			bide: ["7V"],
			block: ["7T", "6T", "5T", "4T"],
			bodyslam: ["9M", "7V", "3T"],
			brickbreak: ["9M", "8V", "7M", "6M", "5M", "4M", "3M"],
			captivate: ["4M"],
			confide: ["7M", "6M"],
			confuseray: ["9M"],
			curse: ["7V"],
			darkpulse: ["9M", "8V", "7M", "6M", "5T", "4M"],
			dig: ["9M", "8V", "6M", "5M", "4M", "3M"],
			disable: ["9L12", "8V", "7L12", "7V", "6L12", "5L12", "4L12", "3L8"],
			doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
			drainpunch: ["9M"],
			dynamicpunch: ["7V", "3T"],
			endure: ["9M", "7V", "4M", "3T"],
			explosion: ["7M", "7V", "6M", "5M", "4M", "3T"],
			facade: ["9M", "8V", "7M", "6M", "5M", "4M", "3M"],
			fireblast: ["9M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			firepunch: ["9M", "8V", "7T", "7V", "6T", "5T", "4T", "3T"],
			flamethrower: ["9M", "8V", "7M", "6M", "5M", "4M", "3M"],
			fling: ["9M", "7M", "7L26", "6M", "6L26", "5M", "5L28", "4M", "4L28"],
			focusblast: ["9M", "7M", "6M", "5M", "4M"],
			focuspunch: ["7T", "6T", "4M", "3M"],
			frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
			gigadrain: ["9M", "7T", "7V", "6T", "5T", "4M", "3M"],
			gigaimpact: ["9M", "7M", "6M", "5M", "4M"],
			gunkshot: ["9M", "9L40", "7T", "7L40", "6T", "6L40", "5T", "5L58", "4T", "4L54"],
			harden: ["9L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			haze: ["8V"],
			headbutt: ["8V"],
			helpinghand: ["9M", "8V"],
			hex: ["9M"],
			hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
			hyperbeam: ["9M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			icepunch: ["9M", "8V", "7T", "7V", "6T", "5T", "4T", "3T"],
			imprison: ["9M"],
			incinerate: ["6M", "5M"],
			infestation: ["7M", "6M"],
			megadrain: ["8V", "7V"],
			memento: ["9L57", "7L57", "6L57", "5L64", "4L65", "3L61"],
			metronome: ["9M"],
			mimic: ["7V", "3T"],
			minimize: ["9L21", "8V", "7L21", "7V", "6L18", "5L17", "4L17", "3L19"],
			// moonblast: ["8V"], // Removed
			mudbomb: ["7L18", "6L18", "5L23", "4L23"],
			mudshot: ["9M", "9L18"],
			mudslap: ["9M", "9L1", "7L1", "7V", "6L1", "5L1", "4T", "4L1", "3T"],
			naturalgift: ["4M"],
			painsplit: ["7T", "6T", "5T", "4T"],
			payback: ["7M", "6M", "5M", "4M"],
			poisongas: ["9L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			poisonjab: ["9M", "8V", "7M", "6M", "5M", "4M"],
			pound: ["9L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			poweruppunch: ["6M"],
			protect: ["9M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			rage: ["7V"],
			raindance: ["9M", "7M", "6M", "5M", "4M", "3M"],
			rest: ["9M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			return: ["7M", "7V", "6M", "5M", "4M", "3M"],
			rockslide: ["9M", "8V", "7M", "6M", "5M", "4M"],
			rocksmash: ["6M", "5M", "4M", "3M"],
			rocktomb: ["9M", "7M", "6M", "5M", "4M", "3M"],
			round: ["7M", "6M", "5M"],
			sandstorm: ["9M"],
			scaryface: ["9M"],
			screech: ["9L37", "8V", "7L37", "7V", "6L32", "5L33", "4L33", "3L26"],
			secretpower: ["6M", "4M", "3M"],
			selfdestruct: ["8V", "7V", "3T"],
			shadowball: ["9M", "8V", "7M", "6M", "5M", "4M"],
			shockwave: ["7T", "6T", "4M", "3M"],
			sleeptalk: ["9M", "7M", "7V", "6M", "5T", "4M", "3T"],
			sludge: ["9L15", "8V", "7L15", "7V", "6L15", "5L20", "4L20", "3L13"],
			sludgebomb: ["9M", "9L29", "8V", "7M", "7L29", "7V", "6M", "6L26", "5M", "5L36", "4M", "4L36", "3M", "3L47"],
			sludgewave: ["9L32", "7M", "7L32", "6M", "6L32", "5M", "5L50"],
			snore: ["7T", "7V", "6T", "5T", "4T", "3T"],
			strength: ["6M", "5M", "4M", "3M"],
			substitute: ["9M", "8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			sunnyday: ["9M", "7M", "7V", "6M", "5M", "4M", "3M"],
			swagger: ["7M", "7V", "6M", "5M", "4M", "3T"],
			swift: ["9M"],
			takedown: ["9M"],
			taunt: ["9M", "8V", "7M", "6M", "5M", "4M", "3M"],
			terablast: ["9M"],
			thief: ["9M", "7M", "7V", "6M", "5M", "4M", "3M"],
			thunder: ["9M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			thunderbolt: ["9M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			thunderpunch: ["9M", "8V", "7T", "7V", "6T", "5T", "4T", "3T"],
			torment: ["7M", "6M", "5M", "4M", "3M"],
			toxic: ["9L26", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			toxicspikes: ["9M"],
			venomdrench: ["7L1", "6L38"],
			venoshock: ["9M", "7M", "6M", "5M"],
			zapcannon: ["7V"],
			zenheadbutt: ["9M"],
		},
	},
	mukalola: {
		learnset: {
			partingshot: ["8M"],
			suckerpunch: ["8M"],
			//////////////////////////////
			acidarmor: ["9L46", "8V", "7L46"],
			acidspray: ["9M", "9L15", "7L15"],
			attract: ["7M"],
			belch: ["9L52", "7L52"],
			bite: ["9L1", "8V", "7L1"],
			block: ["7T"],
			bodyslam: ["9M"],
			brickbreak: ["9M", "8V", "7M"],
			brutalswing: ["7M"],
			confide: ["7M"],
			crunch: ["9M", "9L32", "8V", "7L32"],
			darkpulse: ["9M", "8V", "7M"],
			dig: ["9M", "8V"],
			disable: ["9L12", "8V", "7L12"],
			doubleteam: ["7M"],
			drainpunch: ["9M"],
			embargo: ["7M"],
			endure: ["9M"],
			explosion: ["7M"],
			facade: ["9M", "8V", "7M"],
			fireblast: ["9M", "8V", "7M"],
			firepunch: ["9M", "8V", "7T"],
			flamethrower: ["9M", "8V", "7M"],
			fling: ["9M", "7M", "7L26"],
			focusblast: ["9M", "7M"],
			focuspunch: ["7T"],
			foulplay: ["8V"],
			frustration: ["7M"],
			gastroacid: ["7T"],
			gigadrain: ["9M", "7T"],
			gigaimpact: ["9M", "7M"],
			gunkshot: ["9M", "9L40", "7T", "7L40"],
			harden: ["9L1", "8V", "7L1"],
			haze: ["8V"],
			headbutt: ["8V"],
			helpinghand: ["9M", "8V"],
			hex: ["9M"],
			hiddenpower: ["7M"],
			hyperbeam: ["9M", "8V", "7M"],
			icepunch: ["9M", "8V", "7T"],
			imprison: ["9M"],
			infestation: ["7M"],
			knockoff: ["9L29", "7T", "7L29"],
			megadrain: ["8V"],
			memento: ["9L57", "7L57"],
			metronome: ["9M"],
			minimize: ["9L21", "8V", "7L21"],
			// moonblast: ["8V"], // Removed
			mudshot: ["9M"],
			painsplit: ["7T"],
			payback: ["7M"],
			poisonfang: ["9L18", "7L18"],
			poisongas: ["9L1", "8V", "7L1"],
			poisonjab: ["9M", "8V", "7M"],
			pound: ["9L1", "8V", "7L1"],
			protect: ["9M", "8V", "7M"],
			quash: ["7M"],
			raindance: ["9M", "7M"],
			recycle: ["7T"],
			rest: ["9M", "8V", "7M"],
			return: ["7M"],
			rockpolish: ["7M"],
			rockslide: ["9M", "8V", "7M"],
			rocktomb: ["9M", "7M"],
			round: ["7M"],
			sandstorm: ["9M"],
			scaryface: ["9M"],
			screech: ["9L37", "8V", "7L37"],
			selfdestruct: ["8V"],
			shadowball: ["9M", "8V", "7M"],
			shockwave: ["7T"],
			sleeptalk: ["9M", "7M"],
			sludgebomb: ["9M", "8V", "7M"],
			sludgewave: ["7M"],
			snarl: ["9M", "7M"],
			snore: ["7T"],
			spite: ["7T"],
			stoneedge: ["9M", "7M"],
			substitute: ["9M", "8V", "7M"],
			sunnyday: ["9M", "7M"],
			swagger: ["7M"],
			swift: ["9M"],
			takedown: ["9M"],
			taunt: ["9M", "8V", "7M"],
			terablast: ["9M"],
			thief: ["9M", "7M"],
			thunder: ["9M"],
			thunderbolt: ["9M"],
			thunderpunch: ["9M", "8V", "7T"],
			torment: ["7M"],
			toxic: ["9L26", "8V", "7M"],
			venomdrench: ["7L1"],
			venoshock: ["9M", "7M"],
			zenheadbutt: ["9M"],
		}
	},
	steelix: {
		inherit: true,
		learnset: {
			coil: ["8M"],
		}
	},
	hypno: {
		inherit: true,
		learnset: {
			expandingforce: ["8M"],
		}
	},
	kingler: {
		inherit: true,
		learnset: {
			flipturn: ["8M"],
			aquajet: ["8M"],
			closecombat: ["8M"],
			icepunch: ["8M"],
			meteormash: ["8M"],
			bulletpunch: ["8M"],
		},
	},
	electrode: {
		inherit: true,
		learnset: {
			weatherball: ["8M"],
			flashcannon: ["8M"],
			focusblast: ["8M"],
			shadowball: ["8M"],
			aurasphere: ["8M"],
			magnetbomb: ["8M"],
		},
	},
	electrodehisui: {
		inherit: true,
		learnset: {
			leafstorm: ["8M"],
			sappyseed: ["8M"],
			gigadrain: ["8M"],
			energyball: ["8M"],
			acidspray: ["8M"],
			mistball: ["8M"],
			sludgebomb: ["8M"],
			pollenpuff: ["8M"],
			weatherball: ["8M"],
		},
	},
	exeggutor: {
		learnset: {
			weatherball: ["8M"],
			earthpower: ["8M"],
			///////////////////////////////
			absorb: ["8L1"],
			ancientpower: ["4T", "3S0"],
			attract: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			barrage: ["8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			bide: ["7V"],
			block: ["7T", "6T", "5T"],
			bulldoze: ["8M"],
			bulletseed: ["8M", "8L1", "4M", "3M"],
			calmmind: ["8M"],
			captivate: ["4M"],
			confide: ["7M", "6M"],
			confusion: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			curse: ["7V"],
			doubleedge: ["7V", "3T"],
			doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
			dreameater: ["8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			eggbomb: ["8V", "7L27", "7V", "6L27", "5L27", "4L27", "3L31"],
			endure: ["8M", "7V", "4M", "3T"],
			energyball: ["8M", "7M", "6M", "5M", "4M"],
			expandingforce: ["8T"],
			explosion: ["7M", "7V", "6M", "5M", "4M", "3T"],
			extrasensory: ["8L1"],
			facade: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			flash: ["7V", "6M", "5M", "4M", "3M"],
			frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
			futuresight: ["8M"],
			gigadrain: ["8M", "8L1", "7T", "7V", "6T", "5T", "4M", "3M"],
			gigaimpact: ["8M", "7M", "6M", "5M", "4M"],
			grassknot: ["8M", "7M", "6M", "5M", "4M"],
			grassyglide: ["8T"],
			grassyterrain: ["8M"],
			gravity: ["7T", "6T", "5T", "4T"],
			headbutt: ["8V", "7V", "4T"],
			hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
			hyperbeam: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			hypnosis: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1", "3S0"],
			infestation: ["7M", "6M"],
			leafstorm: ["8M", "8L1", "7L47", "6L47", "5L47", "4L47"],
			leechseed: ["8L1"],
			lightscreen: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			lowkick: ["8M", "7T", "6T", "5T", "4T"],
			magicalleaf: ["8M"],
			megadrain: ["8L1", "8V", "7V"],
			mimic: ["7V", "3T"],
			naturalgift: ["4M"],
			naturepower: ["7M", "6M"],
			nightmare: ["7V", "3T"],
			powerswap: ["8M"],
			// powerwhip: ["8V"], // Removed
			protect: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			psychic: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M", "3S0"],
			psychocut: ["8M"],
			psychup: ["7M", "7V", "6M", "5M", "4M", "3T"],
			psyshock: ["8M", "8L1", "7M", "7L17", "6M", "6L17", "5M", "5L17"],
			psywave: ["7V"],
			rage: ["7V"],
			reflect: ["8M", "8L1", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			refresh: ["3S0"],
			rest: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			return: ["7M", "7V", "6M", "5M", "4M", "3M"],
			rollout: ["7V", "4T", "3T"],
			round: ["8M", "7M", "6M", "5M"],
			secretpower: ["6M", "4M", "3M"],
			seedbomb: ["8M", "8L1", "7T", "7L1", "6T", "6L1", "5T", "5L1", "4T", "4L1"],
			selfdestruct: ["8M", "8V", "7V", "3T"],
			skillswap: ["8M", "7T", "6T", "5T", "4M", "3M"],
			sleeptalk: ["8M", "7M", "7V", "6M", "5T", "4M", "3T"],
			sludgebomb: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			snore: ["8M", "7T", "7V", "6T", "5T", "4T", "3T"],
			solarbeam: ["8M", "8L1", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			stomp: ["8L0", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L19"],
			stompingtantrum: ["8M", "7T"],
			strength: ["7V", "6M", "5M", "4M", "3M"],
			stunspore: ["8V"],
			substitute: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			sunnyday: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			swagger: ["7M", "7V", "6M", "5M", "4M", "3T"],
			swordsdance: ["8M", "7M", "6M", "5M", "4M"],
			synthesis: ["8L1", "7T", "6T", "5T", "4T"],
			takedown: ["7V"],
			telekinesis: ["7T", "5M"],
			teleport: ["8V", "7V"],
			terrainpulse: ["8T"],
			thief: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			toxic: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			trickroom: ["8M", "7M", "6M", "5M", "4M"],
			uproar: ["8M", "8L1"],
			woodhammer: ["8L1", "7L37", "6L37", "5L37", "4L37"],
			worryseed: ["8L1", "7T", "6T", "5T", "4T"],
			zenheadbutt: ["8M", "7T", "6T", "5T", "4T"],
		},
	},
	exeggutoralola: {
		inherit: true,
		learnset: {
			weatherball: ["8M"],
			focusblast: ["8M"],
			earthpower: ["8M"],
			leafblade: ["8M"],
		},
	},
};
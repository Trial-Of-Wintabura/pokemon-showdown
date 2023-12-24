export const Moves: {[k: string]: ModdedMoveData} = {
	soulfang: {
		num: -2001,
		name: "Soul Fang",
		basePower: 80,
		accuracy: 90,
		pp:10,
		priority: 0,
		type: "Ghost",
		category: "Physical",
		drain: [1, 2],
		flags: {contact: 1, bite: 1},
		secondary: null,
		target: "normal",
		contestType: "Cool",
		shortDesc: "Heals 50% of the damage dealt",
		desc: "User recovers 50% of the damage dealt to the target.",
	},
	warpath: {
		num: -2002,
		name: "War Path",
		basePower: 110,
		accuracy: 95,
		pp: 10,
		priority: 0,
		type: "Steel",
		category: "Physical",
		flags: {contact: 1},
		recoil: [1, 3],
		secondary: null,
		target: "normal",
		contestType: "Cool",
		shortDesc: "Has 33% recoil",
		desc: "Has 33% recoil",
	},
	knowledgepath: {
		num: -2003,
		name: "Knowledge Path",
		basePower: 0,
		accuracy: true,
		pp: 1,
		priority: 0,
		type: "Psychic",
		category: "Status",
		flags: {noassist: 1, nosleeptalk: 1, noparentalbond: 1},
		volatileStatus: 'knowledgepath',
		condition: {
			duration: 3,
			durationCallback(target, source, effect) {
				return 3;
			},
			onStart(target, source, effect) {
				this.add('-start', target, 'move: Knowledge Path', '[silent]');
				this.boost({
					atk: 2,
					def: 2,
					spa: 2,
					spd: 2,
					spe: 2,
				}, target);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Knowledge Path', '[silent]');
				pokemon.clearBoosts();
			},
		},
		secondary: null,
		target: "self",
		contestType: "Cool",
		shortDesc: "Raises all stats by 2 stages for 2 turns, then removes all stat changes.",
		desc: "User raises all stats for 2 turns, then loses all stat changes.",
	},
	smitepath: {
		num: -2004,
		name: "Smite Path",
		basePower: 70,
		accuracy: 100,
		pp: 10,
		priority: 0,
		type: "Electric",
		category: "Special",
		flags: {protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		contestType: "Cool",
		shortDesc: "Doubles in power in rain",
		desc: "Doubles in power in rain",
	},
	synchronoise: {
		num: -2005,
		name: "Synchronoise",
		basePower: 85,
		accuracy: 100,
		pp: 4,
		priority: 0,
		type: "Psychic",
		category: "Special",
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Psychic') return 1;
		},
		target: "normal",
		contestType: "Cool",
		shortDesc: "10% chance to confuse. Super effective on Psychic types.",
		desc: "10% chance to confuse. Super effective on Psychic types.",
	},
	leeklunge: {
		num: -2006,
		name: "Leek Lunge",
		basePower: 60,
		accuracy: 100,
		pp: 10,
		priority: 0,
		type: "Flying",
		category: "Physical",
		flags: {slicing: 1, protect: 1, contact: 1},
		critRatio: 2,
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		contestType: "Cool",
		shortDesc: "Has a high chance to critically hit; 50% chance of lowering Defense",
		desc: "This move has an increased chance to critically hit. Additionally, it has a 50% chance to lower the opponent's Defense"
	},
};
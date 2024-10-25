export const Moves: {[k: string]: ModdedMoveData} = {
	//#region Cosmic Moves

	meteorbeam: {
		inherit: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (this.field.isTerrain('cosmicterrain')) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		desc: "This attack charges on the first turn and executes on the second. If the user is holding a Power Herb or the terrain is Cosmic Terrain, the move completes in one turn.",
		shortDesc: "Charges turn 1. Hits turn 2. No charge in Cosmic Terrain.",
	},
	swift: {
		inherit: true,
		onModifyPriority(priority, source, target, move) {
			if (this.field.isTerrain('cosmicterrain')) {
				return priority + 1;
			}
		},
	},
	// New Moves
	cosmicterrain: {
		num: -4001,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Cosmic Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'cosmicterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source.hasItem('terrainextender')) {
					return 8;
				}

				return 5;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Cosmic' || move.type === 'Rock') {
					this.debug('cosmic terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Cosmic Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Cosmic Terrain');
				}
			},
			onModifyWeight(weighthg) {
				return Math.max(1, weighthg - 1000);
			},
			onFieldEnd() {
				this.add('-fieldend', 'move: Cosmic Terrain');
			}
		},
		secondary: null,
		target: "all",
		type: "Cosmic",
		contestType: "Beatiful",
	},
	solarflare: {
		num: -4002,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Solar Flare",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "normal",
		type: "Cosmic",
		contestType: "Tough",
		desc: "Has a 20% chance to burn the target. The target thaws out if it is frozen.",
		shortDesc: "20% chance to burn the target. Thaws target.",
	},
	lunartides: {
		num: -4003,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Lunar Tides",
		pp: 10,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Water', type);
		},
		priority: 0,
		secondary: null,
		target: "normal",
		type: "Cosmic",
		contestType: "Tough",
		desc: "This move combines Water in its type effectiveness against the target.",
		shortDesc: "Combines Flying in its type effectiveness.",
	},
	astroforce: {
		num: -4004,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Astro Force",
		pp: 16,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		volatileStatus: 'smackdown',
		secondary: null,
		target: 'normal',
		type: "Cosmic",
		desc: "This move forces the target to be grounded",
		shortDesc: "Grounds adjacent foes.",
	},
	stardusttrail: {
		num: -4005,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Stardust Trail",
		pp: 32,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Cosmic",
		desc: "Has a 100% chance to raise the user's Speed by 1 stage.",
		shortDesc: "100% chance to raise the user's Speed by 1.",
	},
	rebirth: {
		num: -4006,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rebirth",
		pp: 0.625,
		priority: 0,
		flags: { heal: 1, noassist: 1, nosleeptalk: 1, noparentalbond: 1 },
		boosts: {
			atk: -2,
			spa: -2,
		},
		onHit(target, source, move) {
			source.addVolatile('rebirth');
		},
		condition: {
			onStart(pokemon) {
				this.directDamage(pokemon.maxhp, pokemon);
			},
			onBeforeFaint(pokemon, effect) {
				this.add('-activate', pokemon, 'move: Rebirth', pokemon);
				pokemon.hp = this.trunc(pokemon.maxhp / 2);
				pokemon.clearStatus();
				this.add('-sethp', pokemon, pokemon.getHealth, '[silent]');
				pokemon.clearBoosts();
				this.add('-clearboost', pokemon, '[silent]');
				for (const moveSlot of pokemon.moveSlots) {
					moveSlot.pp = moveSlot.maxpp;
				}
				pokemon.switchFlag = true;
				return false;
			},
		},
		target: "normal",
		type: "Cosmic",
		desc: "Lowers target's Attack and Special Attack by 2. User Faints. User Revives with 50% Max HP the following turn.",
	},
	//#endregion

	//#region Field Support
	healblock: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Heal Block');
					return 7;
				}
				// Removing Field Support
				return 5;
			},
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'move: Heal Block');
				source.moveThisTurnResult = true;
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['heal']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onResidualOrder: 20,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Heal Block');
			},
			onTryHeal(damage, target, source, effect) {
				if ((effect?.id === 'zpower') || this.effectState.isZ) return damage;
				return false;
			},
			onRestart(target, source) {
				this.add('-fail', target, 'move: Heal Block'); // Succeeds to supress downstream messages
				if (!source.moveThisTurnResult) {
					source.moveThisTurnResult = false;
				}
			},
		},
	},
	magicroom: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Magic Room');
					return 7;
				}
				else if (source?.hasAbility('fieldsupport')) {
					this.add('-activate', source, 'ability: Field Support', '[move] Magic Room');
					return 7;
				}
				return 5;
			},
			onFieldStart(target, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-fieldstart', 'move: Magic Room', '[of] ' + source, '[persistent]');
				} else if (source.hasAbility('fieldsupport')) {
					this.add('-fieldstart', 'move: Magic Room', '[of] ' + source, '[fieldsupport]');
				}else {
					this.add('-fieldstart', 'move: Magic Room', '[of] ' + source);
				}
				for (const mon of this.getAllActive()) {
					this.singleEvent('End', mon.getItem(), mon.itemState, mon);
				}
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('magicroom');
			},
			// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 6,
			onFieldEnd() {
				this.add('-fieldend', 'move: Magic Room', '[of] ' + this.effectState.source);
			},
		},
	},
	magnetrise: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source.hasAbility('fieldsupport')) {
					this.add('-activate', source, 'ability: Field Support', '[move] Magnet Rise');
					return 7;
				}
				return 5;
			},
			onStart(target) {
				this.add('-start', target, 'Magnet Rise');
			},
			onImmunity(type) {
				if (type === 'Ground') return false;
			},
			onResidualOrder: 18,
			onEnd(target) {
				this.add('-end', target, 'Magnet Rise');
			},
		},
	},
	safeguard: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Safeguard');
					return 7;
				}
				else if (source?.hasAbility('fieldsupport')) {
					this.add('-activate', source, 'ability: Field Support', '[move] Safeguard');
					return 7;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.id === 'yawn') return;
				if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
				if (target !== source) {
					this.debug('interrupting setStatus');
					if (effect.name === 'Synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
						this.add('-activate', target, 'move: Safeguard');
					}
					return null;
				}
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
				if ((status.id === 'confusion' || status.id === 'yawn') && target !== source) {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Safeguard');
					return null;
				}
			},
			onSideStart(side, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-sidestart', side, 'Safeguard', '[persistent]');
				} else if (source.hasAbility('fieldsupport')) {
					this.add('-sidestart', side, 'Safeguard', '[fieldsupport');
				} else {
					this.add('-sidestart', side, 'Safeguard');
				}
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 3,
			onSideEnd(side) {
				this.add('-sideend', side, 'Safeguard');
			},
		},
	},
	tailwind: {
		inherit: true,
		condition: {
			duration: 4,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Tailwind');
					return 6;
				}
				else if (source?.hasAbility('fieldsupport')) {
					this.add('-activate', source, 'ability: Field Support', '[move] Tailwind');
					return 6;
				}
				return 4;
			},
			onSideStart(side, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-sidestart', side, 'move: Tailwind', '[persistent]');
				} else if (source.hasAbility('fieldsupport')) {
					this.add('-sidestart', side, 'move: Tailwind', '[fieldsupport]');
				} else {
					this.add('-sidestart', side, 'move: Tailwind');
				}
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(2);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 5,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Tailwind');
			},
		},
	},
	telekinesis: {
		inherit: true,
		condition: {
			duration: 3,
			durationCallback(target, source, effect) {
				if (source.hasAbility('fieldsupport')) {
					this.add('-activate', source, 'ability: Field Support', '[move] Telekinesis');
					return 6;
				}
				return 3;
			},
			onStart(target) {
				if (['Diglett', 'Dugtrio', 'Palossand', 'Sandygast'].includes(target.baseSpecies.baseSpecies) ||
						target.baseSpecies.name === 'Gengar-Mega') {
					this.add('-immune', target);
					return null;
				}
				if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;
				this.add('-start', target, 'Telekinesis');
			},
			onAccuracyPriority: -1,
			onAccuracy(accuracy, target, source, move) {
				if (move && !move.ohko) return true;
			},
			onImmunity(type) {
				if (type === 'Ground') return false;
			},
			onUpdate(pokemon) {
				if (pokemon.baseSpecies.name === 'Gengar-Mega') {
					delete pokemon.volatiles['telekinesis'];
					this.add('-end', pokemon, 'Telekinesis', '[silent]');
				}
			},
			onResidualOrder: 19,
			onEnd(target) {
				this.add('-end', target, 'Telekinesis');
			},
		},
	},
	wonderroom: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Wonder Room');
					return 7;
				}
				else if (source?.hasAbility('fieldsupport')) {
					this.add('-activate', source, 'ability: Field Support', '[move] Wonder Room');
					return 7;
				}
				return 5;
			},
			onModifyMove(move, source, target) {
				// This code is for moves that use defensive stats as the attacking stat; see below for most of the implementation
				if (!move.overrideOffensiveStat) return;
				const statAndBoosts = move.overrideOffensiveStat;
				if (!['def', 'spd'].includes(statAndBoosts)) return;
				move.overrideOffensiveStat = statAndBoosts === 'def' ? 'spd' : 'def';
				this.hint(`${move.name} uses ${statAndBoosts === 'def' ? '' : 'Sp. '}Def boosts when Wonder Room is active.`);
			},
			onFieldStart(field, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-fieldstart', 'move: Wonder Room', '[of] ' + source, '[persistent]');
				} else if (source.hasAbility('fieldsupport')) {
					this.add('-fieldstart', 'move: Wonder Room', '[of] ' + source, '[fieldsupport]');
				} else {
					this.add('-fieldstart', 'move: Wonder Room', '[of] ' + source);
				}
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('wonderroom');
			},
			// Swapping defenses partially implemented in sim/pokemon.js:Pokemon#calculateStat and Pokemon#getStat
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 5,
			onFieldEnd() {
				this.add('-fieldend', 'move: Wonder Room');
			},
		},
	},
	//#endregion

	// The basic Move changes have been moved to the scripts.ts file since they are simple and can make a class builder for it.
	//#region Complex Physical Move Changes
	gravapple: {
		inherit: true,
		accuracy: 95,
		volatileStatus: 'smackdown',
		desc: "100% chance to lower Defense by 1 stage; Does 1.5x more damage when used against a target under the effects of Gravity; Grounds the target.",
		shortDesc: "-1 Def; 1.5x against target in Gravity; Grounds the Target.",
	},
	metalclaw: {
		inherit: true,
		basePower: 60,
		self: {
			chance: 50,
			boosts: {
				atk: 1,
			}
		},
		desc: "Has a 50% chance to raise Attack by 1 stage.",
		shortDesc: '50% chance to +1 Atk.',
	}
	//#endregion
};
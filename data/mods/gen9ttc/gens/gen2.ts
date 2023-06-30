import { ModdedDex } from "./../../../../sim/dex";
export default function Gen2 (dex: ModdedDex) {
	let modifyPokemon = (pokemon: string) => {
			
		let baseStat = () => {
			return {
				setHp,
				setAtk,
				setDef,
				setSpA,
				setSpD,
				setSpe,
				pokemon: modifyPokemon(pokemon)
			};
		};

		let learnset = () => {
			return {
				addMove,
				removeMove,
				pokemon: modifyPokemon(pokemon)
			};
		}

		let ability = () => {
			return {
				set0,
				set1,
				setH,
				setS,
				pokemon: modifyPokemon(pokemon)
			}
		}

		let changeType = (type1: string, type2?: string) => {
			dex.modData('Pokedex', pokemon.toLowerCase()).types = type2 ? [type1, type2] : [type1];
			return modifyPokemon(pokemon);
		}

		let addMove = (name: string, gen: number = 8) => {
			dex.modData('Learnsets', pokemon.toLowerCase()).learnset[name.toLowerCase().replace(/ +/g, '')] = [`${gen}M`];
			return learnset();
		}

		let removeMove = (name: string) => {
			dex.modData('Learnsets', pokemon.toLowerCase()).learnset[name.toLowerCase().replace(/ +g/, '')] = [];
			return learnset();
		}

		let setHp = (stat: number) => {
			dex.modData('Pokedex', pokemon.toLowerCase()).baseStats['hp'] = stat;
			return baseStat();
		}

		let setAtk = (stat: number) => {
			dex.modData('Pokedex', pokemon.toLowerCase()).baseStats['atk'] = stat;
			return baseStat();
		}
		
		let setDef = (stat: number) => {
			dex.modData('Pokedex', pokemon.toLowerCase()).baseStats['def'] = stat;
			return baseStat();
		}

		let setSpA = (stat: number) => {
			dex.modData('Pokedex', pokemon.toLowerCase()).baseStats['spa'] = stat;
			return baseStat();
		}

		let setSpD = (stat: number) => {
			dex.modData('Pokedex', pokemon.toLowerCase()).baseStats['spd'] = stat;
			return baseStat();
		}

		let setSpe = (stat: number) => {
			dex.modData('Pokedex', pokemon.toLowerCase()).baseStats['spe'] = stat;
			return baseStat();
		}

		let set0 = (name: string) => {
			dex.modData('Pokedex', pokemon.toLowerCase()).abilities['0'] = name;
			return ability();
		}

		let set1 = (name: string) => {
			dex.modData('Pokedex', pokemon.toLowerCase()).abilities['1'] = name;
			return ability();
		}

		let setH = (name: string) => {
			dex.modData('Pokedex', pokemon.toLowerCase()).abilities['H'] = name;
			return ability();
		}

		let setS = (name: string) => {
			dex.modData('Pokedex', pokemon.toLowerCase()).abilities['S'] = name;
			return ability();
		}

		return {
			learnset,
			baseStat,
			changeType,
			ability,
		}
	}

modifyPokemon('meganium')
	.changeType('Grass', 'Fairy')
	.ability()
		.setH('Serene Grace')
		.set1('Regenerator')
	.pokemon.baseStat()
		.setHp(100)
		.setAtk(60)
		.setSpA(95)
		.setSpe(65)
	.pokemon.learnset()
		.addMove('Moonblast')
		.addMove('Draining Kiss')
		.addMove('Wish')
		.addMove('Springtide Storm', 9)
		.addMove('Roar');

modifyPokemon('typhlosion')
	.changeType('Fire', 'Ground')
	.ability()
		.set1('Anger Point')
	.pokemon.baseStat()
		.setAtk(109)
		.setDef(69)
		.setSpD(72)
		.setSpe(111)
	.pokemon.learnset()
		.addMove('Earth Power')
		.addMove('Trailblaze');

modifyPokemon('typhlosionhisui')
	.ability()
		.setH('Shadow Shield')
		.set1('Perish Body')
	.pokemon.learnset()
		.addMove('Bitter Malice')
		.addMove('Energy Ball')
		.addMove('Night Daze');

modifyPokemon('feraligatr')
	.changeType('Water', 'Dark')
	.ability()
		.set1('Rough Skin')
	.pokemon.learnset()
		.addMove('Jaw Lock')
		.addMove('Lunge')
		.addMove('Scale Shot')
		.addMove('Flip Turn')
		.addMove('Rapid Spin')
		.addMove('Knock Off')
		.addMove('Sucker Punch');

modifyPokemon('furret')
	.ability()
		.set0('Pickpocket')
		.set1('Fur Coat')
		.setH('Speed Boost')
	.pokemon.baseStat()
		.setHp(90)
		.setAtk(81)
		.setDef(74)
	.pokemon.learnset()
		.addMove('Play Rough');

modifyPokemon('noctowl')
	.changeType('Psychic', 'Flying')
	.ability()
		.set1('Trace')
	.pokemon.baseStat()
		.setDef(60)
		.setSpe(85)
	.pokemon.learnset()
		.addMove('Moongeist Beam')
		.addMove('Psyshock');

modifyPokemon('Ledian')
	.changeType('Bug', 'Fighting')
	.baseStat()
		.setHp(80)
		.setAtk(100)
		.setDef(75)
		.setSpA(15)
		.setSpe(95)
	.pokemon.learnset()
		.addMove('Sucker Punch')
		.addMove('Fire Punch');

modifyPokemon('ariados')
	.baseStat()
		.setHp(60)
		.setAtk(100)
		.setSpA(80)
		.setSpe(90)
	.pokemon.learnset()
		.addMove('Skitter Smack')
		.addMove('Nasty Plot')
		.addMove('Taunt')
		.addMove('Torment')
		.addMove('U Turn')
		.addMove('Knock Off');

modifyPokemon('lanturn')
	.learnset()
		.addMove('Parabolic Charge');

modifyPokemon('togekiss')
	.learnset()
		.addMove('Moonblast')
		.addMove('Ice Beam');

modifyPokemon('xatu')
	.ability()
		.set0('Magic Guard')
		.set1('Tinted Lens')
	.pokemon.baseStat()
		.setHp(75);


}
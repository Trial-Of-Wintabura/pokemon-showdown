'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Wanted Poster', () => {
	beforeEach(() => {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [
			{species: 'Cinccino', item: 'wantedposter', moves: ['sleeptalk']},
			{species: 'Lopunny', item: 'leftovers', moves: ['sleeptalk']},
		]});
		battle.setPlayer('p2', {team: [
			{species: 'Meowth', moves: ['sleeptalk']},
			{species: 'Pikachu', moves: ['sleeptalk']},
		]});
	});
	afterEach(() => {
		battle.destroy();
	});
});
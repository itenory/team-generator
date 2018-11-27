import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import PlayerList from '../PlayerList';
import SearchBar from '../SearchBar';

let wrapper;
const testPlayer = 'player1';
const testMultiPlayers = 'player1, player2,   player3, player4';

function addPlayers(text) {
  const input = wrapper.find(SearchBar).find('input');
  input.simulate('change', { target: { value: text } });
  input.simulate('keyDown', { keyCode: 13, which: 13 });
}

describe('Editing the player list', () => {
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('Adding a single player', () => {
    addPlayers(testPlayer);

    const players = wrapper.find(PlayerList).find('li');
    expect(players.length).toBe(1);
  });

  test('Adding multiple players at once', () => {
    addPlayers(testMultiPlayers);

    const { length } = testMultiPlayers.split(',');
    const players = wrapper.find(PlayerList).find('li');
    expect(players.length).toBe(length);
  });

  test('Adding a duplicate should not alter list', () => {
    addPlayers(testPlayer);
    addPlayers(testPlayer);

    const players = wrapper.find(PlayerList).find('li');
    expect(players.length).toBe(1);
  });

  test('Removing a player', () => {});

  test('Editing a player', () => {});
});

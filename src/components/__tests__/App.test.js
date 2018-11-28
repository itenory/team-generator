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

/**
 * Gets all the player elements from the PlayerList component.
 * @return A array of elements in the PlayerList component
 */
function getPlayerListElems() {
  return wrapper.find(PlayerList).find('li');
}

/**
 * Finds a specific player's containing element if they're in the list by
 *  comparing provided name with the one in the element.
 * @param {string} name Name of player to search for.
 * @return If player is found, return element containing player, null otherwise.
 */
function findPlayer(name) {
  const playerList = getPlayerListElems();
  let player = null;

  playerList.map(listItem => {
    if (listItem.find('span').text() === name) {
      player = listItem;
    }
  });
  return player;
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

    expect(findPlayer(testPlayer).contains(testPlayer)).toBe(true);
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

  test('Removing a player', () => {
    addPlayers(testPlayer);

    const player = findPlayer(testPlayer);
    player
      .find('button')
      .at(0)
      .simulate('click');

    expect(findPlayer(testPlayer)).toBe(null);
  });

  test('Editing a player', () => {});
});

import React, { Component } from 'react';
import PlayerList from './PlayerList';
import SearchBar from './SearchBar';

class App extends Component {
  state = { players: {} };

  addPlayers = names => {
    const playersToAdd = names.split(','); // separate multiple players with ','
    const playerList = { ...this.state.players };

    // Adds new users to list it not a duplicate.
    playersToAdd.map(name => {
      if (!playerList[name.trim()]) {
        playerList[name.trim()] = { name: name.trim() };
      }
      return name;
    });

    this.setState({ players: playerList });
  };

  render() {
    return (
      <main>
        <PlayerList players={this.state.players} />
        <SearchBar onSubmit={this.addPlayers} />
      </main>
    );
  }
}

export default App;

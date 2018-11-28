import React from 'react';
import PropTypes from 'prop-types';

const PlayerList = props => {
  // No IE Support, must change later.
  const listItems = Object.values(props.players).map(player => (
    <li key={`player-${player.name}`}>
      <span>{player.name}</span>
      <button type="button" onClick={() => props.removePlayer(player.name)}>
        Remove
      </button>
    </li>
  ));

  return <ul>{listItems}</ul>;
};

PlayerList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  removePlayer: PropTypes.func.isRequired
};
export default PlayerList;

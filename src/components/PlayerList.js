import React from 'react';
import PropTypes from 'prop-types';

const PlayerList = props => {
  // No IE Support, must change later.
  const listItems = Object.values(props.players).map(player => (
    <li key={`player-${player.name}`}>{player.name}</li>
  ));

  return <ul>{listItems}</ul>;
};

PlayerList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
};
export default PlayerList;

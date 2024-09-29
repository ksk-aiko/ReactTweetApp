import React from 'react';
import PropTypes from 'prop-types';
import './Styles/Simple.css';  // CSSファイルをインポート

const Simple = ({ tweet }) => {
  return (
    <div className="simple-container">
      <p><strong>{tweet.name} {tweet.id}</strong></p>
      <p>{tweet.timestamp.split(',')[0]} - {tweet.content}</p>
    </div>
  );
};

Simple.propTypes = {
  tweet: PropTypes.shape({
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default Simple;

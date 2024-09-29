import React from 'react';
import PropTypes from 'prop-types';
import './Styles/Detail.css';  // CSSファイルをインポート

const Detail = ({ tweet }) => {
  // 模擬的な統計データ
  const retweets = Math.floor(Math.random() * 100);
  const quoteTweets = Math.floor(Math.random() * 50);
  const likes = Math.floor(Math.random() * 200);

  return (
    <div className="detail-container">
      <p><strong>{tweet.name} {tweet.id}</strong></p>
      <p>{tweet.timestamp} - Twitter Web App</p>
      <p>{tweet.content}</p>
      <div className="tweet-stats">
        <span>{retweets} Retweets</span> | 
        <span>{quoteTweets} Quote Tweets</span> | 
        <span>{likes} Likes</span>
      </div>
    </div>
  );
};

Detail.propTypes = {
  tweet: PropTypes.shape({
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default Detail;

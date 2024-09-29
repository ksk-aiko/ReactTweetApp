import React, { useState } from 'react';
import TextArea from './TextArea';
import Simple from './Simple';
import Detail from './Detail';
import './Styles/Main.css';  // CSSファイルをインポート

const Main = () => {
  const [tweetData, setTweetData] = useState(null);

  // TextAreaコンポーネントからツイートデータを受け取り状態に保存
  const handleTweetSubmit = (data) => {
    setTweetData({
      ...data,
      timestamp: new Date().toLocaleString(), // ツイートのタイムスタンプを追加
    });
  };

  return (
    <div className="main-container">
      <h1 className="main-title">Twitter Preview</h1>
      {/* TextAreaコンポーネント */}
      <div className="text-area">
        <TextArea onSubmit={handleTweetSubmit} />
      </div>

      {/* ツイートデータがある場合にSimpleとDetailを表示 */}
      {tweetData && (
        <>
          <Simple tweet={tweetData} />
          <Detail tweet={tweetData} />
        </>
      )}
    </div>
  );
};

export default Main;

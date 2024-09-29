import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Styles/TextArea.css';

const TextArea = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && id && content) {
      onSubmit({ name, id, content });
      setName('');
      setId('');
      setContent('');
    }
  };

  return (
    <form className="text-area-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">名前:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input
          id="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">ツイート内容:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button className="submit-button" type="submit">送信</button>
    </form>
  );
};

TextArea.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TextArea;

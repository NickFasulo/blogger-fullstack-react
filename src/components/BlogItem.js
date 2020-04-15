import React from 'react';
import Button from './Button';

const BlogItem = ({
  onUpdate,
  onDelete,
  blog: { title, author, subject, article, _id: id },
}) => {
  return (
    <div>
      <div className="ui card" style={{ width: '75%', padding: '20px' }}>
        <div className="content">
          <div className="header">{title}</div>
          <br />
          <div className="meta" style={{ fontWeight: 'bold', color: '3b3b3b' }}>
            Author: {author}
          </div>
          <br />
          <div className="meta" style={{ fontWeight: 'bold', color: '3b3b3b' }}>
            Subject: {subject}
          </div>
          <hr />
          <div className="description">{article}</div>
        </div>
        <Button
          className="ui green button"
          style={{ margin: '10px 15px' }}
          onClick={() => {
            return onUpdate(id);
          }}
        >
          Update
        </Button>
        <Button
          className="ui primary button"
          style={{ margin: '10px 15px' }}
          onClick={() => {
            return onDelete(id);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BlogItem;

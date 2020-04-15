import React from 'react';
import BlogItem from './BlogItem';
import PropTypes from 'prop-types';
import { searchIt } from '../services/search';

const Blogs = props => {
  return (
    <div>
      {props.blogs.filter(searchIt(props.searchTerm)).map((blog, idx) => {
        return (
          <BlogItem
            key={blog._id}
            onUpdate={props.onUpdate}
            onDelete={props.onDelete}
            blog={blog}
          />
        );
      })}
    </div>
  );
};

Blogs.propTypes = {
  toggle: PropTypes.bool,
  onDelete: PropTypes.func,
  blog: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      article: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ),
};

export default Blogs;

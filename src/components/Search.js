import React from 'react';

const Search = (props) => {
  return (
    <div>
      <form className="ui form">
        <div className="field">
          <input
            onChange={props.handleChange}
            type="text"
            placeholder="Search..."
            value={props.searchTerm}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;

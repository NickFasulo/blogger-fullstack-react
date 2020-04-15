import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      blog: { title: '', subject: '', author: '', article: '' },
      blogs: [],
    };
  }

  handleChange = (event) => {
    let updatedBlog = { ...this.state.blog };
    updatedBlog[event.target.name] = event.target.value;
    this.setState({ blog: updatedBlog }, () => {
      console.log(updatedBlog);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let emptyBlog = { title: '', author: '', subject: '', article: '' };
    let blogState = [...this.state.blogs];

    blogState.unshift(this.state.blog);
    this.setState({ blog: emptyBlog, blogs: blogState });
    event.target.reset();
  };

  render() {
    return (
      <div style={{ margin: 40 }}>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="equal width fields">
            <div className="field">
              <label>Title</label>
              <div className="ui fluid input">
                <input
                  type="text"
                  placeholder="title..."
                  name="title"
                  value={this.state.blog.title}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="equal width fields">
            <div className="field">
              <label>Author</label>
              <div className="ui fluid input">
                <input
                  type="text"
                  placeholder="Author..."
                  name="author"
                  value={this.state.blog.author}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="equal width fields">
            <div className="field">
              <label>Subject</label>
              <div className="ui fluid input">
                <input
                  type="text"
                  placeholder="subject..."
                  name="subject"
                  value={this.state.blog.subject}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="equal width fields">
            <div className="field">
              <label>Article</label>
              <div className="ui fluid input">
                <input
                  type="text"
                  placeholder="article..."
                  name="article"
                  value={this.state.blog.article}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <button className="ui button" type="submit">
              Submit
            </button>
          </div>
        </form>
        <hr />
        {this.state.blogs
          .map((blog, idx) => {
            return (
              <div
                className="ui card"
                key={blog.objectId}
                style={{ width: '75%', padding: '20px' }}
              >
                <div className="content">
                  <div className="header">{blog.title}</div>
                  <br />
                  <div className="meta">Author: {blog.author}</div>
                  <br />
                  <div className="meta">Subject: {blog.subject}</div>
                  <hr />
                  <div className="description">{blog.article}</div>
                </div>
                <button
                  className="ui primary button"
                  style={{ margin: '10px 15px' }}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Form;

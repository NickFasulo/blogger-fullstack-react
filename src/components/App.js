import React, { Component } from 'react';
import axios from 'axios';
import Blogs from './Blogs';
import Search from './Search';
import CreateBlog from './CreateBlog';
import UpdateBlog from './UpdateBlog';
// import blogs from '../data/data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      searchTerm: '',
      toggle: false,
      blog: {},
    };
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  loadBlogs = () => {
    axios.get('/blogs').then(blogs => {
      // return console.log(blogs.data);
      this.setState({ blogs: blogs.data });
    });
  };

  loadBlog = id => {
    axios.get(`/blog/${id}`).then(blog => {
      // return console.log(blog);
      this.setState({ toggle: false, blog: blog.data });
    });
  };

  onUpdate = id => {
    // console.log(`Update: `, id);
    this.loadBlog(id);
  };

  onDelete = id => {
    axios.delete(`/blog/${id}`).then(() => {
      this.loadBlogs();
    });
    // const updatedBlogs = this.state.blogs.filter(item => item.objectId !== id);
    // this.setState({ blogs: updatedBlogs });
    // console.log(`Delete item with id: `, id);
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      console.log(this.state.searchTerm);
    });
  };

  handleCreateBlogSubmit = (event, blog) => {
    event.preventDefault();
    // let updatedBlogs = [blog, ...this.state.blogs];
    // this.setState(
    //   {
    //     blogs: updatedBlogs,
    //   },
    //   () => {
    //     console.log(this.state.blogs);
    //   }
    // );
    let axiosConfig = {
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    axios.post('/blog', blog, axiosConfig);
  };

  handleUpdateBlogSubmit = (event, blog, id) => {
    event.preventDefault();
    this.setState({ toggle: true });

    let axiosConfig = {
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };

    axios.put(`/blog/${id}`, blog, axiosConfig).then(() => {
      return this.loadBlogs();
    });
  };

  componentDidMount() {
    this.loadBlogs();
  }

  render() {
    console.log('blog:', this.state.blog);
    return (
      <div
        style={{
          marginTop: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Search
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
        />
        {this.state.toggle ? (
          <CreateBlog handleCreateBlogSubmit={this.handleCreateBlogSubmit} />
        ) : (
          <UpdateBlog
            blog={this.state.blog}
            handleUpdateBlogSubmit={this.handleUpdateBlogSubmit}
          />
        )}
        <Blogs
          blogs={this.state.blogs}
          searchTerm={this.state.searchTerm}
          onDelete={this.onDelete}
          onUpdate={this.onUpdate}
          toggle={this.state.toggle}
        />
      </div>
    );
  }
}

export default App;

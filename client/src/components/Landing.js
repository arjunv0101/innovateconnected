import React, { Component } from 'react'

import PostList from "./PostList.js"

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME TO INNOVATE CONNECTED</h1>
          </div>
        </div>
        <div>
          <PostList />
        </div>
      </div>
    )
  }
}

export default Landing

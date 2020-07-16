import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getposts } from './PostFunctions.js';
import jwt_decode from 'jwt-decode'


const Post = props => (
    <div>
    <table>
        <thead className="thead-light">
            <tr>Article Title: {props.post.articletitle}</tr>
            <tr>Article Author: {props.post.articleauthor}</tr>
            
            <tr>Post Author: {props.post.username}</tr>
            <tr>Date: {props.post.date.substring(0,10)}</tr>
            
            <tr>Content:</tr>
            <tr>{props.post.content}</tr>
        </thead>
        <br></br>
    </table>
    </div>
)

export default class PostList extends Component{
    constructor(props){
        super(props);

        this.state = {posts: []};
    }

    componentDidMount(){
        console.log("hello1")
        getposts("hello")
            .then(response => {
                this.setState ({
                    posts: response
                })
                console.log(response)
            })
            .catch((error) => {
                console.log('Error: ' + error)
        })
    }

    postList(){
        if(this.state.posts == null){return <p>No Posts Yet</p>}

        return this.state.posts.map(currentpost => {
            return (<div>
                <Post post = {currentpost}/>
                <br></br>
                </div>)
        })
    }

    render(){
        return(
            <div>
                <h3>Previous Posts</h3>

                {this.postList()}

                <hr></hr>
            </div>
        );
    }
}
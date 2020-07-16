import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'
import { addpost } from './PostFunctions'
import jwt_decode from 'jwt-decode'



export default class CreatePost extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeArticletitle = this.onChangeArticletitle.bind(this);
        this.onChangeArticleauthor = this.onChangeArticleauthor.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            username: "",
            email: "",
            articletitle: "",
            articleauthor: "",
            date: new Date(),
            content: "",
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.username,
            email: decoded.email
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeArticletitle(e){
        this.setState({
            articletitle: e.target.value
        });
    }
    onChangeArticleauthor(e){
        this.setState({
            articleauthor: e.target.value
        });
    }

    onChangeContent(e){
        this.setState({
            content: e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            username: this.state.username,
            email: this.state.email,
            articletitle: this.state.articletitle,
            articleauthor: this.state.articleauthor,
            content: this.state.content,
            date: this.state.date,
        }
        
        console.log(post);

        addpost(post).then(res => {
            this.props.history.push(`/`)
          })

    }

    render(){
        return(
            <div>
                <h3>Create Post</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                            <label>Date: </label>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                    </div>
                    <div>{this.state.username}</div>
                    <div>
                        <div className = "form-group">
                            <label>Article Title: </label>
                            <input type="text" required className="form-control" value={this.state.articletitle} onChange={this.onChangeArticletitle} />
                        </div>
                        <div className = "form-group">
                            <label>Article Author: </label>
                            <input type="text" required className="form-control" value={this.state.articleauthor} onChange={this.onChangeArticleauthor} />
                        </div>
                        <div className = "form-group">
                            <label>Content: </label>
                            <input type="text" required className="form-control" value={this.state.content} onChange={this.onChangeContent} />
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Submit Post" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }
}
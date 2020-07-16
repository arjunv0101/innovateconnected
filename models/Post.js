const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
    username:{type: String,required: true,},
    email: {type: String, required: true},
    articletitle:{type: String,required: true,},
    articleauthor:{type: String,required: true,},
    content:{type: String,required: true,},
    date:{type: Date,default: Date.now,},
    likes:{type: Number},
    dislikes: {type: Number},
    comments: {type: [String]}

}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
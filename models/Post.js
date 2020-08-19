
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var PostSchema = new Schema({
  title: String,
  text: String
},
{
  timestamps: true
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
import PostModel from '../../models/Post';

class PostController {

  index(req, res) {
    PostModel.find().then((posts) => {
      if(!posts) {
        console.log('2')
        return res.send(err);
      }
      console.log(posts)
      res.json(posts);
    }).catch((error) => {
      console.log(error);
    });
  }

  create(req, res) {

    var data = req.body;
  
    var post = new PostModel({
      title: data.title,
      text: data.text,
      imageUrl: data.imageUrl,
    });
    post.save().then(() => {
      res.send({status: 'ok'});
    });
  }

  read(req, res) {
    PostModel.findOne({_id: req.params.id}).then(post => {
      if(!post) {
        res.send({error: "Not Found"});
      } else {
        res.json(post);
      }
    });
  }

  update(req, res) {
    PostModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
      if(err) {
        return res.send(err);
      }
  
      res.json({status: 'updated'});
    });
  }

  delete(req, res) {
    console.log(req.params);
    PostModel.remove({
      _id: req.params.id
    }).then(post => {
      console.log(post);
      if(post){
        res.json({status: 'deleted'});
      } else {
        res.json({status: 'error'});
      }
    })
  }
}

export default PostController;
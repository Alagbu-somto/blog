const content = require("../content");
const _ = require("lodash");
const blogModel = require("../model/blogModel");

const homeControler_get = (req, res) => {
  blogModel.find((err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.render("home", {
        Home: content.homeStartingContent,
        Post: posts,
      });
    }
  });
};
const aboutController_get = (req, res) => {
  res.render("about", { About: content.contactContent });
};
const contactController_get = (req, res) => {
  res.render("contact", { Contact: content.acontactContent });
};
const composeController_get = (req, res) => {
  res.render("compose");
};
const composeController_post = (req, res) => {
  console.log(req.body);
  let text = req.body.Text;
  let post = req.body.Post;
  const blogPost = blogModel({
    title: text,
    content: post,
  });
  blogPost.save();
  res.status(200).redirect("/");
};

const postControllers_get = (req, res) => {
  const topics = _.lowerCase(req.params.topic);
  blogModel.find((err, items) => {
    if (err) {
      console.log(err);
    } else {
      items.forEach((item) => {
        const title = _.lowerCase(item.title);
        if (topics === title) {
          res.render("post", {
            postTitle: item.title,
            postContent: item.content,
            ID: item._id,
          });
        }
      });
    }
  });
};

const deleteControllers_post = (req, res) => {
  blogModel.findByIdAndRemove(req.body.id, (err, founditem) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};
module.exports = {
  homeControler_get,
  aboutController_get,
  contactController_get,
  composeController_get,
  composeController_post,
  postControllers_get,
  deleteControllers_post,
};

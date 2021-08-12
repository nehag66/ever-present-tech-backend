exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "first post",
        content: "this is the first post!",
        imageUrl: "images/IMG_8357.JPG",
        creator: {
          name: "Neha",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //   console.log(title, content);
  console.log("post created");

  //create post in DB
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Neha" },
      createdAt: new Date(),
    },
  });
};

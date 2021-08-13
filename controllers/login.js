exports.getClients = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "client1",
        // clientName: "Neha",
      },
    ],
  });
};

// exports.createPost = (req, res, next) => {
//   const title = req.body.title;
//   const content = req.body.content;
//   //   console.log(title, content);
//   console.log("post created");

//   //create post in DB
//   res.status(201).json({
//     message: "Post created successfully!",
//     post: {
//       _id: new Date().toISOString(),
//       clientName: clientName,
//     },
//   });
// };

exports.getClients = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "client1",
      },
    ],
  });
};

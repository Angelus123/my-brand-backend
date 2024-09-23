const comments = [];
const homepage = (req, res) => res.json({message: 'request recieved'});

const getComments = (req, res) => res.json({message: 'all comments retrieved', comments});

const addComment = (req, res) => {
  const comment = req.body;
  comment.id = comments.length;
  comments.push(comment);
  res.json({message: `comment ${comment.name} successfully created`, comment});
}

const getComment = (req, res) => {
  const comment = req.body;
  comment.id = comments.length;
  comments.push(comment);
  res.json({message: `comment ${comment.name} successfully created`, comment});
}

const updateComment = (req, res) => {
  const id = req.params.id;
  const comment = comments.find((e) => e.id == id);
  const update = req.body;
  Object.assign(comment, update);
  res.json({message: `comment with id ${id} successfully updated`, comment: comment})
}

const deleteComment = (req, res) => {
  const {id} = req.params;
  comments.splice(id, 1);
  res.json({message: `comment with id ${id} successfully deleted`});
}

export {homepage, getComments, getComment, updateComment, addComment, deleteComment, comments}
const messages = [];
const homepage = (req, res) => res.json({message: 'request recieved'});

const getMessages = (req, res) => res.json({message: 'all blogs retrieved', messages});

const addMessage = (req, res) => {
  const blog = req.body;
  blog.id = blogs.length;
  blogs.push(blog);
  res.json({message: `blog ${blog.name} successfully created`, blog});
}

const getMessage = (req, res) => {
  const blog = req.body;
  blog.id = blogs.length;
  blogs.push(blog);
  res.json({message: `message ${blog.name} successfully created`, message});
}

const updateMessage = (req, res) => {
  const id = req.params.id;
  const blog = blogs.find((e) => e.id == id);
  const update = req.body;
  Object.assign(blog, update);
  res.json({message: `blog with id ${id} successfully updated`, blog: blog})
}

const deleteMessage = (req, res) => {
  const {id} = req.params;
  blogs.splice(id, 1);
  res.json({message: `blog with id ${id} successfully deleted`});
}

export {homepage, getMessages, getMessage, updateMessage, addMessage, deleteMessage, messages}
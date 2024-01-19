const users = [];

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const createUser = ({ id, name, room }) => {
  const foundUser = users.find((user) => user.name === name);

  if (foundUser) {
    return {
      error: "Username is taken",
    };
  }

  const user = { id, name, room };
  users.push(user);

  return { user };
};

const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1);
  }
};

module.exports = { getUser, createUser, deleteUser };

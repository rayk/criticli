const ADD_PROJECT = 'ADD_PROJECT';

const addProject = payload => {
  return {
    type: ADD_PROJECT,
    payload
  };
};

module.exports = {
  ADD_PROJECT,
  addProject
};

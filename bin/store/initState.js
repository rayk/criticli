const initialState = payload => {
  return {
    state: {
      projects: {}
    },
    config: { path: payload, initDate: new Date() }
  };
};

module.exports = {
  initialState
};

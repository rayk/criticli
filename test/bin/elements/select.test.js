const R = require("ramda");
const select = require("../../../bin/elements/selector");
const state = require("../../resources/store");

test("Returns the only one active project.", () => {
  const result = select.currentProject(state);
  expect(result).toHaveLength(1);
  expect(R.prop("isDefault", R.head(result))).toBe(true);
});

test("Returns a list of all projects.", () => {
  const result = select.allProjects(state);
  console.log(result);
});

const benefit_edit = {
  benefitId: 'IUE347DQ381',
  name: 'Remaining Time Mapping',
  description:
    'Understanding how much is left to deliver each remaining benefit.',
  created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
  updated: 'Tue Dec 19 2017 11:55:29 GMT+1100 (AEDT)',
  impact: 3,
  active: true
};

const benefit_edit_undesirable_add = {
  benefitId: '37NJY8N2YQ',
  undesirableId: '93J3UH4T3',
  label: 'Remaining time not expressed in work days.',
  determination:
    'The remain time is takes into considerations work days and public holidays.',
  degree: 2,
  active: true,
  created: 'Tue Dec 19 2017 11:23:15 GMT+1100 (AEDT)',
  updated: 'Tue Dec 19 2017 11:23:15 GMT+1100 (AEDT)'
};

const benefit_edit_undesirable_edit = {};
const benefit_edit_undesirable_remove = {};
const benefit_edit_undesirable_move = {};
const benefit_edit_negation_add = {};
const benefit_edit_negation_edit = {};
const benefit_edit_negation_remove = {};
const benefit_edit_negation_move = {};

module.exports = {
  benefit_edit,
  benefit_edit_negation_add,
  benefit_edit_negation_edit,
  benefit_edit_negation_remove,
  benefit_edit_negation_move,
  benefit_edit_undesirable_move,
  benefit_edit_undesirable_add,
  benefit_edit_undesirable_edit,
  benefit_edit_undesirable_remove
};

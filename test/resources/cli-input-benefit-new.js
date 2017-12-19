const benefit_add = {
  benefitId: '37NJY8N2YQ',
  name: 'Daily Failure Probability',
  description:
    'Daily updated probability of benefit failure accounting for all available evidence.',
  created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
  updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
  impact: 3,
  active: true
};

const benefit_add_with_undesirable = {
  benefitId: 'IUE347DQ381',
  name: 'Benefit Time Mapping',
  description:
    'Understanding how much is left to deliver each remaining benefit.',
  created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
  updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
  impact: 3,
  active: true,
  undesirables: [
    {
      undesirableId: '8293HYE3',
      label: 'Unable to portion remaining time.',
      determination:
        'The remaining time available to each benefit is calculated.',
      degree: 4,
      active: true,
      created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
      updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)'
    },
    {
      undesirableId: 'JKR837BGW',
      label: 'Remaining time not portioned based on evidence',
      determination:
        'The remain time is calculated based on benefit failure impact and history effort.',
      degree: 5,
      active: true,
      created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
      updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)'
    },
    {
      undesirableId: 'IE8JUJ182',
      label: 'Remaining time not portioned based on benefit failure impact',
      determination:
        'The remain time is calculated based on benefit failure impact of each benefit.',
      degree: 5,
      active: true,
      created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
      updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)'
    },
    {
      undesirableId: '837IJB73Y',
      label: 'Remain time evenly portioned to benefit.',
      determination:
        'The remaining time is not portioned to the benefits in equal fashion.',
      degree: 1,
      active: true,
      created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
      updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)'
    }
  ]
};

const benefit_add_undesirable = {
  benefitId: 'IUE347DQ381',
  undesirableId: 'GPQ837YHZ',
  label:
    'Remain time portioned within consideration for undesirables and negations.',
  determination:
    'The remaining time is calculated with consideration to the number of negations and undesirables a benefit has.',
  degree: 3,
  active: true,
  created: 'Tue Dec 19 2017 11:24:04 GMT+1100 (AEDT)',
  updated: 'Tue Dec 19 2017 11:24:04 GMT+1100 (AEDT)'
};

module.exports = {
  benefit_add,
  benefit_add_undesirable,
  benefit_add_with_undesirable
};

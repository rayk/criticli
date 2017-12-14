const R = require('ramda');
const S = require('string');

/**
 * Reads the command line input.
 * @param rawInputs
 * @returns {(Record<string, any> & any) | <T, U>(val: T, obj: U) => (Record<K, T> & U) | <U>(obj: U) => (Record<K, T> & U)}
 */
const mapFromCli = rawInputs => {
  const optionKeyList = R.map(
    R.drop(2),
    R.map(R.prop('long'), rawInputs.options)
  );
  return R.assoc(
    'args',
    S(R.head(rawInputs.args)).titleCase().s,
    R.zipObj(
      optionKeyList,
      R.map(R.propOr(false, R.__, rawInputs), optionKeyList)
    )
  );
};

module.exports = {
  mapFromCli
};

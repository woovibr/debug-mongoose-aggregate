const util = require('util');

const debug = (message = '', data) => {
  console.log(message, util.inspect(data, false, null, true));
};

const debugAggregate = async (model, pipeline) => {
  for (const i=1; i<pipeline.length; i++) {
    const p = pipeline.slice(0, i);

    const result = await model.aggregate(p);

    debug('Aggregation step:', p);
    debug('Result:', result);
  }
}

module.exports = debugAggregate;
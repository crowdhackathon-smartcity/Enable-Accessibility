/**
 * Live-model.js
 *
 * @description :: Live point model, like parking slots
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    point : {
      model: 'point',
      required: true
    },
    status: {
      type: 'string',
      enum: ['available', 'unavailable', 'queued'],
      required: true
    }


  }
};

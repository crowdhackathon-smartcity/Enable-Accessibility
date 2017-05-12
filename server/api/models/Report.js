/**
 * Report.js
 *
 * @description :: Model to record citizen reports, accessibility infrastructure or obstacles
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    point: {
      model: 'point',
      required: true
    },
    type: {
      type: 'string',
      enum: ['ramp', 'obstacle', 'lift', 'noise-light']
    },
    description: {
      type: 'string'
    },
    image: {
      type: 'string'
    }

  }
};

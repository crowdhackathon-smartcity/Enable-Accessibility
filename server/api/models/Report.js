/**
 * Report.js
 *
 * @description :: Model to record citizen reports, accessibility infrastructure or obstacles
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
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
    },
    reviews: {
      collection: 'review',
      via: 'report'
    }

  }
};

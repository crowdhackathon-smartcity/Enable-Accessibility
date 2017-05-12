/**
 * Review.js
 *
 * @description :: Review model
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    report: {
      model: 'report',
      via: 'reviews',
      required: true
    },
    ranking: {
      type: 'integer',
      enum: [1,2,3,4,5],
      required: true
    },
    comment: {
      type: 'string'
    },
    image: {
      type: 'string'
    }

  }
};

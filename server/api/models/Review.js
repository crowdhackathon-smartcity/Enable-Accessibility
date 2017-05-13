/**
 * Review.js
 *
 * @description :: Review model
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
      type: 'string',
	  defaultsTo: ""
    },
    image: {
      type: 'string'
    }

  }
};

/**
 * Route.js
 *
 * @description :: Map navigation route mock data
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
    points: {
      required: true,
      collection: 'point'
    },
    type: {
      required: true,
      type: 'string',
      enum: ['walking', 'handicap', 'blind']
    },
    color: {
      type: 'string'
    }
  }
};

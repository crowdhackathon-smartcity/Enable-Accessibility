/**
 * Point.js
 *
 * @description :: Represents points on map
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
    lat: {
      type: 'float',
      required: true
    },
    lng: {
      type: 'float',
      required: true
    },
    label: {
      type: 'string'
    },
    marker: {
      model: 'marker'
    }
  }
};

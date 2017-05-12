/**
 * Marker.js
 *
 * @description :: Describe marker icon
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
    label: {
      type: 'string'
    },
    url: {
      type: 'string',
      required: true
    }
  }
};

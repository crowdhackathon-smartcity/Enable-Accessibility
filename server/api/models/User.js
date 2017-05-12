/**
 * User.js
 *
 * @description :: Users model
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
    username: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    points: {
      type: 'integer',
      defaultsTo: 0,
      required: true
    },
    type: {
      type: 'string',
      enum: ['civilian', 'manicipality', 'business'],
      required: true
    },
    vouchers : {
      collection: 'voucher',
      via: 'business'
    }
  }
};

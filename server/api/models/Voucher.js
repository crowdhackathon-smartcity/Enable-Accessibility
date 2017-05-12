/**
 * Voucher.js
 *
 * @description :: Voucher model
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    points: {
      type: 'integer',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    business: {
      model: 'user',
      via: 'vouchers'
    }
  }
};

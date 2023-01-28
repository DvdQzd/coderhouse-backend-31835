/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string', required: true },
    price: { type: 'number', required: true },
    category: { type: 'string', required: true },
    author: { type: 'string', defaultsTo: 'anonymous' },
    description: { type: 'string', defaultsTo: 'no description available' }
  },

};

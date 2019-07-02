/**
 * Questions.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    details: {
      type: 'string'
    },
    a: {
      type: 'string'
    },
    b: {
      type: 'string'
    },
    c: {
      type: 'string'
    },
    d: {
      type: 'string'
    },
    correct: {
      type: 'string'
    },
    exams: {
      model: 'exams'
    },
  },

};


import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  response: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
  reviews: DS.hasMany('review', { async: true })
});

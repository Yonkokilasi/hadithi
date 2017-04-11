import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  rating: DS.attr(),
  answer: DS.belongsTo('answer', { async: true }),
});
// 172750

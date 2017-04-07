import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
  rating: DS.attr(),
  answeryy: DS.belongsTo('answeryy', { async: true }),
});

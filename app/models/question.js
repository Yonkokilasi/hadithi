import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  subject: DS.attr(),
  query: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
  
});

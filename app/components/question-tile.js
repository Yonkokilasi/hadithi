import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params)
  },
  delete(question) {
    if (confirm())
  }
});

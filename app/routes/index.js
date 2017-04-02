import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    savequestion3(params) {
     var newquestion = this.store.createRecord('question', params);
     newquestion.save();
     this.transitionTo('index');
   },
    destroyquestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
  }
  }
});

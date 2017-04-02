import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion(params) {
     var newQuestion = this.store.createRecord('question', params);
     newquestion.save();
     this.transitionTo('index');
   },
    destroyquestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
  }
  }
});

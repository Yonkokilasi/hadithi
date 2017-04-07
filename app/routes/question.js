import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
    return this.store.findRecord('question', params.question_id);
},
 actions: {
 update(question, params) {
  Object.keys(params).forEach(function(key) {
    if(params[key]!==undefined) {
      question.set(key,params[key]);
    }
    // function above allows for updated Qs to be stored in firebase
  });
  question.save();
  this.transitionTo('index');
},

// This (above) allows for one to be able to delete a Q
saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
  },
  saveQuestion(params) {
    var newQuestion = this.store.createRecord('question', params);
    newQuestion.save();
    this.transitionTo('index');
},
saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('index');
  },
destroyQuestion(question) {
  var answer_deletions = question.get('answers').map(function(answer) {
    return answer.destroyRecord();
  });
  Ember.RSVP.all(answer_deletions).then(function() {
    return question.destroyRecord();
  });
  this.transitionTo('index');
}

  }
});

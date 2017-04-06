import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
    var question = params[0];
// Although at the moment the answers do not display , they are still counted . So for questions that have answers more than three, the below code will generate a glyphicon for it
    if(question.get('answers').get('length') >= 3) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
    }
    // Although at the moment the answers do not display , they are still counted . So for questions that have answers less than three, the below code will generate a glyphicon for it
    if(question.get('answers').get('length') < 3) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-download"></span>');
  }
  }


export default Ember.Helper.helper(questionPopularity);

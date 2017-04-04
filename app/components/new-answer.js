import Ember from 'ember';

export default Ember.Component.extend({
    addNewAnswer : false,
    action: {
        answerFormShow() {
            this.set('addNewAnswer',true);
        },
        
    }
});

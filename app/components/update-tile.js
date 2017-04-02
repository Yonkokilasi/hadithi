import Ember from 'ember';

export default Ember.Component.extend({
    updateQuestionForm: false,
    actions: {
        updateQuestion() {
            this.set('updateQuestionForm',true);
        },
        update(question) {
            var params = {
                owner: this.get("owner"),
                subject: this.get('subject'),
                query: this.get('query'),
        };
        this.set('updateQuestionForm',false);
        this.sendAction('update', question, params);
    }
},
});

import Ember from 'ember';

export default Ember.Component.extend({
    addNewQuestion : false,
    actions: {
        QuestionShow() {
            this.set('addNewQuestion',true);
        },
        saveQuestion() {
            var params = {
                owner: this.get("owner"),
                subject: this.get('subject'),
                query: this.get('query'),
            };
            this.set ('addNewQuestion',false);
            this.sendAction('saveQuestion',params);
        },
        hideForm() {
            this.set('addNewQuestion',false);
        }
    }
});

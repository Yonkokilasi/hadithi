import Ember from 'ember';

export default Ember.Component.extend({
    addNewAnswer : false,
    actions: {
        AnswerForm() {
            this.set('addNewAnswer',true);
        },
        saveAnswer() {
            var params = {
            author: this.get("author"),
            response: this.get("response"),
            question: this.get("question")
        };
        this.set ('addNewAnswer',false);
        this.sendAction('saveAnswer',params);
    }
}
});

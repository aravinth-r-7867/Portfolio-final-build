import Component from '@ember/component';

export default Component.extend({
    classNames:['level-up-wrapper'],
    init(){
        this._super(...arguments);
    },
    actions:{
        goToNextLevel(){
            this.set('accuracy', false);
        }
    }
});

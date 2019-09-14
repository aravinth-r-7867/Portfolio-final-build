import Component from '@ember/component';
import { htmlSafe } from '@ember/string';

export default Component.extend({
    classNames : ['jumbotron jumbotron-fluid header-jumbotron-wrapper-override'],
    classNameBindings : ['scrolledDown:shrink'],
    elementId: 'jumbotron',
    init(){
        this._super(...arguments);
        this.set('showNavBarMob', false);
    },
    actions:{
        showNavToggle : function(){
            this.toggleProperty('showNavBarMob');
        }
    }
});

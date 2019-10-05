import Component from '@ember/component';
import { htmlSafe } from '@ember/string';

export default Component.extend({
    classNames : ['jumbotron jumbotron-fluid header-jumbotron-wrapper-override'],
    classNameBindings : ['scrolledDown:shrink'],
    elementId: 'jumbotron',
    init(){
        this._super(...arguments);
        this.set('showNavBarMob', false);
        this.set('leadCountOne', true);
        this.set('leadCountTwo', false);
        this.set('leadCountThree', false);
    },
    actions:{
        showNavToggle : function(){
            this.toggleProperty('showNavBarMob');
        },
        leadClick : function(par){
            this.set('leadCountOne', false);
            this.set('leadCountTwo', false);
            this.set('leadCountThree', false);
            this.set(par, true);
        }
    }
});

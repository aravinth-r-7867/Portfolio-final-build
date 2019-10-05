import Component from '@ember/component';

export default Component.extend({
    init(){
        this._super(...arguments);
        this.set('scrolledDown', false);
        var self = this;
        if(screen.width > 426){
            $(window).scroll(function (event) {
                if($(window).scrollTop() > 500){
                    self.set('scrolledDown', true);
                } else{
                    self.set('scrolledDown', false);
                }
            });
        }
    },
    actions:{
        scrollToTop : function(){
            window.scrollTo(0,0);
        }
    }
});

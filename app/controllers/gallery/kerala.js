import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    imageGalleryData : service(),
    init(){
        this.set('galleryMainData', this.imageGalleryData.galleryImagesData[1].allImages);
    },
    myOptions:  { 
        followFinger: false,
        loop : true,
        speed : 250,
        initialSlide : 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }
});

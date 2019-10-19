import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    /**
     * @galleryImagesData main array contains all the images categorized in objects,
     * @galleryMainData array contains images for main slideshow
     */
    imageGalleryData : service(),
    init(){
        this._super(...arguments);
        this.set('galleryImagesData', this.imageGalleryData.galleryImagesData);
    },
    
});

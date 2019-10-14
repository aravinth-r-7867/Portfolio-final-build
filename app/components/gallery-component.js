import Component from '@ember/component';

export default Component.extend({
    /**
     * @galleryImagesData main array contains all the images categorized in objects,
     * @galleryMainData array contains images for main slideshow
     * @gwSlideIndex index indicating image that is being displayed
     * @gwMainArrLen slide show array length
     * @gwCurrentSlide index to indicate current slide show
     */
    init(){
        this._super(...arguments);
        this.set('galleryImagesData', [
            {
            'thumbnail' : 'marina-boat.JPG',
            'title' : 'Marina beach, Chennai',
            'active' : true,
            'allImages' : [
                'marina-boat.JPG',
                'marina-sun-2.JPG',
                'marina-sun-1.JPG'
            ] 
            },
            {
            'thumbnail' : 'Arikkal-falls.JPG',
            'title' : 'Kerala',
            'active' : false,
            'allImages' : [
                'Arikkal-falls.JPG',
                'Athirapally-falls.jpg',
                'Alleppey-boat.JPG',
                'Arikkal_falls_motion_capture.jpg',
                'Aluva_aparments.jpg',
                'Anchelpetty_rubber_tree.jpg'
            ] 
            },
            {
            'thumbnail' : 'manali-sun.JPG',
            'title' : 'Delhi - Shimla - Manali', 
            'active' : false,
            'allImages' : [
                'manali-sun.JPG',
                'manali-tree.JPG',
                'manali-stream.jpg',
                'Delhi_highway_tower.jpg',
                'manali_fiber_handcraft.jpg'
            ] 
            },
            {
            'thumbnail' : 'kanyakumari-horse.JPG',
            'title' : 'Kanyakumari',
            'active' : false,
            'allImages' : [
                'kanyakumari-horse.JPG',
                'kanyakumari-sea-roaring.JPG',
                'kanyakumari-boat.JPG'
            ] 
            },
        ]);
        this.set('galleryMainData', this.galleryImagesData[0].allImages);
        this.set('gwMainArrLen', this.galleryMainData.length);
        this.set('gwSlideIndex', 0);
        this.set('gwCurrentSlide', 0);
    },
    actions : {
        changeSlideSet : function(arr, index){
            var temp = this.galleryImagesData[this.gwCurrentSlide];
            Ember.set(temp, 'active', false);
            temp = this.galleryImagesData[index];
            Ember.set(temp, 'active', true);
            this.set('gwCurrentSlide', index);
            this.set('galleryMainData', arr);
            this.set('gwMainArrLen', arr.length);
            //Moving to index slide on slideshow change
            this.set('gwSlideIndex', 0);
            if(window.screen > 425){
                $('#gw-main-slideshow').css({"transform":"translateX(" + (this.gwSlideIndex * -75) + "vw)"});
            } else{
                $('#gw-main-slideshow').css({"transform":"translateX(" + (this.gwSlideIndex * -100) + "%)"});
            }
        },
        gwSlideShow : function(par){
            if(par == 'next') {
                this.set('gwSlideIndex', this.gwSlideIndex + 1);
            } else if(this.gwSlideIndex) {
                this.set('gwSlideIndex', this.gwSlideIndex - 1);
            }
            if(window.screen > 425){
                $('#gw-main-slideshow').css({"transform":"translateX(" + (this.gwSlideIndex * -75) + "vw)"});
            } else{
                $('#gw-main-slideshow').css({"-webkit-transform":"translateX(" + (this.gwSlideIndex * -100) + "%)"});
            }
        }
    }
});

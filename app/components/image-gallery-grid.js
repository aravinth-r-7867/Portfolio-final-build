import Component from '@ember/component';

export default Component.extend({
    classNames : ['container-fluid image-gallery-grid'],
    elementId: 'image-gallery',
    init(){
        this._super(...arguments);
        this.set('isModalOpen', false);
        this.set('imageList',[

            { 
            "first" : "marina-boat.JPG",
            "second" : "marina-sun-2.JPG ",
            "third" : "Arikkal-falls.JPG",
            "fourth" : "Athirapally-falls.jpg",
            "fifth" : "couples-in-marina.JPG",
            "sixth" : "trichy-uchi-pillayar-kovil.jpg",
            "seventh" : "srirangam-temple.jpg"
            },

            {
            "first" : "Aluva-aquaduct-bridge.jpg ",
            "second" : "kaveri-water.JPG",
            "third" : "manali-buddha-temple.jpg",
            "fourth" : "Alleppey-boat.JPG",
            "fifth" : "manali-stream.jpg",
            "sixth" : "manali-sun.JPG",
            "seventh" : "manali-tree.JPG"
            },

            {
            "first" : "kanyakumari-horse.JPG",
            "second" : "pitchavaram-sun.jpg",
            "third" : "kanyakumari-boat.JPG",
            "fourth" : "srirangam-sculpture.JPG",
            "fifth" : "kanyakumari-sea-roaring.JPG",
            "sixth" : "tanjore-pillar.JPG",
            "seventh" : "marina-sun-1.JPG"
            }

        ]);
        var self = this;
        //  this.imageList.forEach(function(item, index){
        //     var headerImage = new Image();
        //     headerImage.src = '/assets/images/' + item.first;
        //     headerImage.classList.add("img-fluid", "border");
        //     $("#imageGridContainer" + index).prepend(headerImage);
        // });
    },
    didInsertElement(){
       
    },
    actions:{
        openModal: function(ImageSrc){
            this.toggleProperty('isModalOpen');
            setTimeout(function(){
                ImageSrc = '/assets/images/' + ImageSrc;
                $("#modalImageContainer").css('background-image', 'url(' + ImageSrc + ')');
            }, 0);
        },
        closeModal : function(){
            this.toggleProperty('isModalOpen');
        }
    }
});

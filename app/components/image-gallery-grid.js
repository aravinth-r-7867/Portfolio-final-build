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
            "fourth" : "Athirapally-falls.JPG",
            "fifth" : "couples-in-marina.JPG",
            "sixth" : "trichy-uchi-pillayar-kovil.JPG",
            "seventh" : "srirangam-temple.JPG"
            },

            {
            "first" : "Rameshwaram-Pamban-bridge.JPG", 
            "second" : "kaveri-water.JPG",
            "third" : "manali-buddha-temple.JPG",
            "fourth" : "Alleppey-boat.JPG",
            "fifth" : "manali-stream.JPG",
            "sixth" : "manali-sun.JPG",
            "seventh" : "manali-tree.JPG"
            },

            {
            "first" : "kanyakumari-horse.JPG",
            "second" : "Aluva-aquaduct-bridge.JPG ",
            "third" : "kanyakumari-boat.JPG",
            "fourth" : "srirangam-sculpture.JPG",
            "fifth" : "kanyakumari-sea-roaring.JPG",
            "sixth" : "pitchavaram-sun.JPG",
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

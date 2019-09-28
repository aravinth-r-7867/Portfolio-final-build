import Component from '@ember/component';

export default Component.extend({
    classNames : ['container-fluid image-gallery-grid'],
    elementId: 'image-gallery',
    init(){
        this._super(...arguments);
        this.set('isModalOpen', false);
        this.set('imageAll', [
            {
                "imageUrl" : "marina-boat.JPG",
                "imageIndex" : 0
            },
            {
                "imageUrl" : "marina-sun-2.JPG",
                "imageIndex" : 1
            },
            {
                "imageUrl" : "Arikkal-falls.JPG",
                "imageIndex" : 2
            },
            {
                "imageUrl" : "Athirapally-falls.jpg",
                "imageIndex" : 3
            },
            {
                "imageUrl" : "couples-in-marina.JPG",
                "imageIndex" : 4
            },
            {
                "imageUrl" : "trichy-uchi-pillayar-kovil.jpg",
                "imageIndex" : 5
            },
            {
                "imageUrl" : "srirangam-temple.jpg",
                "imageIndex" : 6
            },
            {
                "imageUrl" : "kanyakumari-horse.JPG",
                "imageIndex" : 7
            },
            {
                "imageUrl" : "Aluva-aquaduct-bridge.jpg",
                "imageIndex" : 8
            },
            {
                "imageUrl" : "pitchavaram-sun.jpg",
                "imageIndex" : 9
            },
            {
                "imageUrl" : "srirangam-sculpture.JPG",
                "imageIndex" : 10
            },
            {
                "imageUrl" : "kanyakumari-sea-roaring.JPG",
                "imageIndex" : 11
            },
            {
                "imageUrl" : "kanyakumari-boat.JPG",
                "imageIndex" : 12
            },
            {
                "imageUrl" : "marina-sun-1.JPG",
                "imageIndex" : 13
            },
            {
                "imageUrl" : "Rameshwaram-Pamban-bridge.jpg",
                "imageIndex" : 14
            },
            {
                "imageUrl" : "kaveri-water.JPG",
                "imageIndex" : 15
            },
            {
                "imageUrl" : "manali-buddha-temple.jpg",
                "imageIndex" : 16
            },
            {
                "imageUrl" : "Alleppey-boat.JPG",
                "imageIndex" : 17
            },
            {
                "imageUrl" : "manali-stream.jpg",
                "imageIndex" : 18
            },
            {
                "imageUrl" : "manali-sun.JPG",
                "imageIndex" : 19
            },
            {
                "imageUrl" : "manali-tree.JPG",
                "imageIndex" : 20
            },
        ])
        this.set('imageList',[

            { 
            "first" : { "url" : "marina-boat.JPG", "imageIndex" : 0},
            "second" : { "url" : "marina-sun-2.JPG", "imageIndex" : 1},
            "third" : { "url" : "Arikkal-falls.JPG", "imageIndex" : 2},
            "fourth" : { "url" : "Athirapally-falls.jpg", "imageIndex" : 3},
            "fifth" : { "url" : "couples-in-marina.JPG", "imageIndex" : 4},
            "sixth" : { "url" : "trichy-uchi-pillayar-kovil.jpg", "imageIndex" : 5},
            "seventh" : { "url" : "srirangam-temple.jpg", "imageIndex" : 6}
            },

            {
            "first" : { "url" : "Rameshwaram-Pamban-bridge.jpg", "imageIndex" : 7},
            "second" : { "url": "kaveri-water.JPG", "imageIndex" : 8},
            "third" : { "url" : "manali-buddha-temple.jpg", "imageIndex" : 9},
            "fourth" : { "url" : "Alleppey-boat.JPG", "imageIndex" : 10},
            "fifth" : { "url" : "manali-stream.jpg", "imageIndex" : 11},
            "sixth" : {"url" : "manali-sun.JPG", "imageIndex" : 12},
            "seventh" : { "url" : "manali-tree.JPG", "imageIndex" : 13}
            },

            {
            "first" : { "url" : "kanyakumari-horse.JPG", "imageIndex" : 14},
            "second" : { "url" : "Aluva-aquaduct-bridge.jpg", "imageIndex" : 15},
            "third" : { "url" : "pitchavaram-sun.jpg", "imageIndex" : 16},
            "fourth" : { "url" : "srirangam-sculpture.JPG", "imageIndex" : 17},
            "fifth" : { "url" : "kanyakumari-sea-roaring.JPG", "imageIndex" : 18},
            "sixth" : { "url" : "kanyakumari-boat.JPG", "imageIndex" : 19},
            "seventh" : { "url" : "marina-sun-1.JPG", "imageIndex" : 20}
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
    myOptions: { 
        followFinger: false,
        //effect: 'fade',
        loop : true,
        speed : 250,
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'fraction',
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    },
    actions:{
        openModal: function(){
            this.toggleProperty('isModalOpen');
        }
    }
});

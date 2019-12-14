import Service from '@ember/service';

export default Service.extend({
    init(){
        this._super(...arguments);
        this.set('galleryImagesData', [
            {
            'thumbnail' : 'marina-boat.JPG',
            'title' : 'Marina beach, Chennai',
            'active' : true,
            'url' : 'gallery.marina',
            'allImages' : [
                'couples-in-marina.JPG',
                'marina-boat.JPG',
                'marina-sun-2.JPG',
                'marina-sun-1.JPG'
            ] 
            },
            {
            'thumbnail' : 'Arikkal-falls.JPG',
            'title' : 'Kerala',
            'active' : false,
            'url' : 'gallery.kerala',
            'allImages' : [
                'Arikkal-falls.JPG',
                'Athirapally-falls.jpg',
                'Alleppey-boat.JPG',
                'Arikkal_falls_motion_capture.JPG',
                'Aluva_aparments.jpg',
                'Anchelpetty_rubber_tree.jpg',
                'Aluva-aquaduct-bridge.jpg'
            ] 
            },
            {
            'thumbnail' : 'manali-sun.JPG',
            'title' : 'Delhi - Shimla - Manali', 
            'active' : false,
            'url' : 'gallery.manali',
            'allImages' : [
                'manali-sun.JPG',
                'manali-tree.JPG',
                'manali-stream.jpg',
                'Delhi_highway_tower.jpg',
                'manali_fiber_handcraft.JPG',
                'manali-buddha-temple.jpg'
            ] 
            },
            {
            'thumbnail' : 'kanyakumari-horse.JPG',
            'title' : 'South India',
            'active' : false,
            'url' : 'gallery.south-india',
            'allImages' : [
                'kanyakumari-wave.JPG',
                'kanyakumari-horse.JPG',
                'kanyakumari-sea-roaring.JPG',
                'kanyakumari-boat.JPG',
                'kaveri-water.JPG',
                'pitchavaram-sun.jpg',
                'Rameshwaram-Pamban-bridge.JPG',
                'srirangam-sculpture.JPG',
                'srirangam-temple.jpg',
                'tanjore-pillar.JPG',
                'trichy-uchi-pillayar-kovil.jpg',
                'southindia-1.JPG',
                'southindia-2.JPG',
                'southindia-3.jpg',
                'southindia-4.jpg',
                'southindia-5.jpg',
                'southindia-6.jpg',
                'southindia-7.jpg',
                'southindia-8.jpg',
                'southindia-9.jpg',
                'southindia-10.jpg',
                'southindia-11.jpg',
                'southindia-12.jpg',
                'southindia-13.jpg',
                'southindia-14.jpg',
                'southindia-15.jpg',
                'southindia-16.jpg',
                'southindia-17.jpg',
            ] 
            },
            {
            'thumbnail' : 'hawa-mahal-with-sun.JPG',
            'title' : 'Rajasthan',
            'active' : false,
            'url' : 'gallery.rajasthan',
            'allImages' : [
                'amber-pigeons.JPG',
                'amber-fort-sunshade.JPG',
                'meharang-puppet.JPG',
                'jaisalmer-fort-landscape.JPG',
                'jaisalmer-fort-pathway.JPG',
                'jaisalmer-fort-and-city.JPG',
                'jaisalmer-window-sill.JPG',
                'jaisalmer-maharaja-hal-pillars.JPG',
                'jaisalmer-maharaja-fort-architecture.JPG',
                'jashwand-thada.JPG',
                'jaisalmer-fort-with-blue-sky.JPG',
                'udaipur-pigeon.JPG',
                'udaipur-lake-arch.JPG',
                'sam-clouds.JPG',
                'hawa-mahal-with-sun.JPG'
            ]
            }
        ]);
    }
});

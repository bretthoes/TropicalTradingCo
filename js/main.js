
/* Email */
function emailSubmitted() {
    var counter = 0;
    var inst = setInterval(change, 2000);
    document.getElementById("footer-email-form").innerHTML = "Thanks! You've been added to our list.";
  }

/* Gallery */

var indexGalleryPlants = [
    {
        "name": "14 Monstera",
        "image": "img/transparent/14_ Monstera.png"
    },
    {
        "name": "14 Ficus Lyrata",
        "image": "img/transparent/14_ Ficus Lyrata.png"
    },
    {
        "name": "14 Burle Marx",
        "image": "img/transparent/14_ Burle Marx.png"
    },
    {
        "name": "10 Ponytail Palm",
        "image": "img/transparent/10_ Ponytail Palm.png"
    },
    {
        "name": "10 Philodendron",
        "image": "img/transparent/10_ Philodendron.png"
    },
    {
        "name": "10 Philodendron Congo",
        "image": "img/transparent/10_ Philodendron Congo.png"
    }
];

function injectIndexGallery(container, array){
    

    for (let i = 0; i < array.length; i++){

        // Create item in carousel; chain all child elements
        // Create item wrapper
        const itemWrapper = document.createElement('div');
        itemWrapper.classList.add('carousel-item');
        // Set first item to active
        if (i === 0){
            itemWrapper.classList.add('active');
        }

        // Set item breakpoints for screen resizing
        const itemBreakpoints = document.createElement('div');
        itemBreakpoints.classList.add('col-xxl-2','col-xl-3', 'col-lg-4', 'col-md-6', 'col-sm-12', 'carousel-responsive-col');
        itemWrapper.appendChild(itemBreakpoints);

        // Create and add image inside wrapper
        const itemImage = document.createElement('img');
        itemImage.src = array[i].image;
        itemImage.alt = array[i].name;
        itemImage.classList.add('img-fluid');
        itemBreakpoints.appendChild(itemImage);
        
        // Finally, add parent container to carousel
        container.appendChild(itemWrapper);
    }
}

if (document.getElementById('carouselContainer')){
    let carouselContainer = document.getElementById("carouselContainer");
    injectIndexGallery(carouselContainer,indexGalleryPlants);
}



/*<div class="carousel-item active">
                            <div class="col-xl-2 col-lg-3 col-md-6">
                                <a href=""><img class="img-fluid" src="img/transparent/14_ Monstera.png"></a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/14_ Ficus Lyrata.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/14_ Burle Marx.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/10_ Ponytail Palm.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/10_ Philodendron.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/10_ Philodendron Congo.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/10_ Croton.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/10_ Burle Marx.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/10_ Philodendron Prince of Orange.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/10_ Ficus Tineke.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/10_ Agalonema Silver Bay.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/8_ Philodendron Congo Rojo.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/8_ ZZ.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/8_ Croton Petra.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/8_ Monstera.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/6_ Monstera.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/6_ Agalonema Silver Bay.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/10_ Sansevieria.png">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <img class="img-fluid" src="img/transparent/10_ Alocasia.png">
                            </div>
                        </div>*/

       function initMap() {
  
        const gfg_office = {
            lat: 53.524826099053264, 
            lng: -1.4018819724203475
        };

        const map = new google.maps.Map(
                document.getElementById("map"), {

            zoom: 17.56,
            center: gfg_office,
        });
    }

    var page = document.querySelector("body");
function myFunction() {
    page.classList.toggle("light-mode");
  }
  
  console.log(page);
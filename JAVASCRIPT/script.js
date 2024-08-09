const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "6CKPUUdVu9wATGAQ-pTTzxPvJUWaqDFsEsTVX1gh5Gyw4fIfQB");
myHeaders.append("x-apihub-host", "Earthquakes-API.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "f51f407e-f7bc-4d3e-a6e1-4e12d7c55df8");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};

!async function EarthquakeApi() {

    await fetch("https://Earthquakes-API.proxy-production.allthingsdev.co/fdsnws/event/1/query?format=geojson&starttime=2024-01-01&endtime=2024-01-02", requestOptions)
   .then((response) => response.text())
   .then((result) => 
    {
    console.log(result);
    EartquakeData(result);
    })
   .catch((error) => console.error(error));
} ();

function EartquakeData(dataFromApi) {
    console.log(dataFromApi);
    let earthquakeDataDiv = document.getElementById("earthquakeData");
    let temp = JSON.parse(dataFromApi);
    console.log(temp); //I wanted to see what parameters im working with.


    console.log(temp.features[0].properties.type); 
    console.log(temp.features[0].properties.mag); 
    console.log(temp.features[0].properties.place);
    console.log(temp.features[1].properties.type); 
    console.log(temp.features[1].properties.mag); 
    console.log(temp.features[1].properties.place);
   
  
    for (let i = 0; i < 2; i++) {  
        let type = temp.features[i].properties.type;
        let magnitude = temp.features[i].properties.mag;
        let location = temp.features[i].properties.place;

        let p = document.createElement("h5");
        p.innerHTML = `Earthquake ${i + 1} - Type: ${type}, Magnitude: ${magnitude}, Location: ${location}`;
        earthquakeDataDiv.appendChild(p);
    }
};


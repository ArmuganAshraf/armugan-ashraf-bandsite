const apiKey  = '6729f518-b29e-4f0f-959b-ee5dafb5b5fd';

window.addEventListener('load',() => {
  console.log('doc is ready');// used this part from the API class notes

  axios.get('https://project-1-api.herokuapp.com/showdates?api_key='+apiKey)
  .then(function (response) {
    console.log(response.data);
    showDates(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
});

function showDates(data){
  for( i = 0; i < data.length; i++){
    let showDiv = document.getElementById(i).children;

    let date = showDiv[1];
    let venue = showDiv[3];;
    let location = showDiv[5];

    date.innerHTML = data[i]["date"];
    venue.innerHTML = data[i]["place"];
    location.innerHTML = data[i]["location"];
  
  }
    
}
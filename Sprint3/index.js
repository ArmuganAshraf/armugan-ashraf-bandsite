const apiKey  = '6729f518-b29e-4f0f-959b-ee5dafb5b5fd';

let commentsArray;

window.addEventListener('load',() => {
  console.log('doc is ready');

  axios.get('https://project-1-api.herokuapp.com/comments?api_key='+apiKey)
  .then(function (response) {
    // handle success
    console.log(response.data);
    commentsArray = response.data;
    populateComments();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
});

document.getElementById("btnComments").addEventListener("click", () => {
  console.log("button clicked");

  let newName = document.getElementById('name').value;
  let newComment = document.getElementById('comments').value;
  
  let headers = {
    'Content-Type': 'application/json'
  };

  axios.post('https://project-1-api.herokuapp.com/comments?api_key='+apiKey,{
    name: newName,
    comment: newComment
  },{headers: headers})
  .then(function (response) {
    console.log(response);
    commentsArray.push(response.data);
    addToComments(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

});

function populateComments(){
  /*for(i = commentsArray.length - 1; i >= 0; i--){
    addToComments(commentsArray[i]);
  }*/

  for(i = 0; i < commentsArray.length; i++){
    addToComments(commentsArray[i]);
  }
}

function addToComments(comment){
    //let newName = document.getElementById('name').value;
    //let newComment = document.getElementById('comments').value;

    let newName = comment["name"];
    let newComment = comment["comment"];
    //got the new date solution from Google
    let date = new Date(comment["timestamp"]);
    let convertedDate = date.getMonth()+1+"/"+date.getDate() + "/" + date.getFullYear();

    let commentHolder = document.getElementById('all_comments');

    let secComments = document.createElement('div');
    secComments.classList.add('sec_comments');

    let img = document.createElement("img");
    img.src = "./images/grey.jpg";

    let newInput = document.createElement('div');
    newInput.classList.add('comments__user1');

    let name = document.createElement('p');
    name.classList.add('comments__user1__name');
    name.innerHTML = newName;

    let span = document.createElement('span');
    span.classList.add('comments__user1__date');

    span.innerHTML = convertedDate;

    let details_comment = document.createElement('p');
    details_comment.classList.add('comments__user1__comment');
    details_comment.innerHTML = newComment;

    name.append(span);

    newInput.append(name);
    newInput.append(details_comment);

    secComments.append(img);
    secComments.append(newInput);

    commentHolder.prepend(secComments);

}
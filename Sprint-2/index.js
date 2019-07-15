function addToComments(){
    let newName = document.getElementById('name').value;
    let newComment = document.getElementById('comments').value;

    let commentHolder = document.getElementById('all_comments');

    let newInput = document.createElement('div');
    newInput.classList.add('comments__user1');

    let name = document.createElement('p');
    name.classList.add('comments__user1__name');
    name.innerHTML = newName;

    let span = document.createElement('span');
    span.classList.add('comments__user1__date');

    //got the new date solution from Google
    let date = new Date();
    let str = date.getMonth()+"/"+date.getDate() + "/" + date.getFullYear();
    span.innerHTML = str;

    let details_comment = document.createElement('p');
    details_comment.classList.add('comments__user1__comment');
    details_comment.innerHTML = newComment;

    name.append(span);
    newInput.append(name);
    newInput.append(details_comment);

    commentHolder.prepend(newInput);

}
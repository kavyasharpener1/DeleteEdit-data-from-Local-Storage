const myForm = document.getElementById('my-form');
let myName = document.querySelector('#name');
let myEmail = document.querySelector('#email');
myForm.addEventListener('submit', onSubmit);

//function call on submit
function onSubmit(e){
    e.preventDefault();
    console.log("1111111111111111");
    let user = {
        username : myName.value,
        useremail: myEmail.value
    }
    
    storeUserInLocalStorage(user);
    
    showUserOnScreen(user);
    //clear the screen
    document.forms[0].reset();
} 

//method to store the details in local storage
function storeUserInLocalStorage(myUser){
    console.log(myUser.username);
    console.log(myUser.useremail);
    localStorage.setItem(`${myUser.useremail}`, JSON.stringify(myUser));
}

//method to display user details on screen
function showUserOnScreen(myUser){
    const parentNode = document.getElementById('users');
    const childNode = `<li id=${myUser.useremail}>${myUser.username} ${myUser.useremail} <button onclick=editUser('${myUser.useremail}','${myUser.username}')>Edit</button> <button onclick=deleteUser('${myUser.useremail}')>Delete</button>
    </li>`;
    parentNode.innerHTML=parentNode.innerHTML+childNode;
}

//method to delete user from local storage
function deleteUser(emailId){
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}

//method to delete user details from screen
function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('users');
    const childNodeToDelete = document.getElementById(emailId);
    if(childNodeToDelete){
        parentNode.removeChild(childNodeToDelete);
    }
}

//method to edit userdetails
function editUser(emailId, userName){
    document.getElementById('email').value = emailId;
    document.getElementById('name').value = userName;
    deleteUser(emailId);
}
/***********ADMIN CONTROLS**********/

document.getElementById('createParty').addEventListener('click', function(){
    document.querySelector('.create-office-cover').style.display = 'none';
    document.querySelector('.create-party-cover').style.display = 'block';
    document.querySelector('.edit-party-cover').style.display = 'none';
});

document.getElementById('manageParty').addEventListener('click', function(){
    document.querySelector('.create-office-cover').style.display = 'none';
    document.querySelector('.create-party-cover').style.display = 'none';
    document.querySelector('.edit-party-cover').style.display = 'block';


});
document.getElementById('createOffice').addEventListener('click', function(){
    document.querySelector('.create-office-cover').style.display = 'block';
    document.querySelector('.create-party-cover').style.display = 'none';
    document.querySelector('.edit-party-cover').style.display = 'none';
});

 // Get the container element
 var btnContainer = document.getElementById("user-sider-action");

 // Get all buttons with class="btn" inside the container
 var btns = btnContainer.getElementsByClassName("side");
 
 // Loop through the buttons and add the active class to the current/clicked button
 for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
     var current = document.getElementsByClassName("active");
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";
   });
 }
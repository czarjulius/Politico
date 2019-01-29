
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
   


/***********User CONTROLS**********/
document.getElementById('castVote').addEventListener('click', function(){
    document.querySelector('.party-container').style.display = 'none';
    document.querySelector('.review-container').style.display = 'none';
    document.querySelector('.vote-container').style.display = 'none';
    document.querySelector('.select-vote-box').style.display = 'block';
    document.querySelector('.interest-container').style.display = 'none';
});

document.getElementById('listParty').addEventListener('click', function(){
    document.querySelector('.party-container').style.display = 'block';
    document.querySelector('.review-container').style.display = 'none';
    document.querySelector('.vote-container').style.display = 'none';
    document.querySelector('.select-vote-box').style.display = 'none';
    document.querySelector('.interest-container').style.display = 'none';
});

document.getElementById('voteReview').addEventListener('click', function(){
    document.querySelector('.party-container').style.display = 'none';
    document.querySelector('.review-container').style.display = 'block';
    document.querySelector('.vote-container').style.display = 'none';
    document.querySelector('.select-vote-box').style.display = 'none';
    document.querySelector('.interest-container').style.display = 'none';
});
document.getElementById('listParty').addEventListener('click', function(){
    document.querySelector('.party-container').style.display = 'block';
    document.querySelector('.review-container').style.display = 'none';
    document.querySelector('.vote-container').style.display = 'none';
    document.querySelector('.select-vote-box').style.display = 'none';
    document.querySelector('.interest-container').style.display = 'none';
});

document.getElementById('nominate').addEventListener('click', function(){
    document.querySelector('.party-container').style.display = 'none';
    document.querySelector('.review-container').style.display = 'none';
    document.querySelector('.vote-container').style.display = 'block';
    document.querySelector('.select-vote-box').style.display = 'none';
    document.querySelector('.interest-container').style.display = 'none';
});
document.getElementById('expressInterest').addEventListener('click', function(){
    document.querySelector('.party-container').style.display = 'none';
    document.querySelector('.review-container').style.display = 'none';
    document.querySelector('.vote-container').style.display = 'none';
    document.querySelector('.select-vote-box').style.display = 'none';
    document.querySelector('.interest-container').style.display = 'block';
});





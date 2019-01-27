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

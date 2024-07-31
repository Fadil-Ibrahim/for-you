document.getElementById('flipBtn').addEventListener('click', function() {
    document.querySelector('.card').style.transform = 'rotateY(180deg)';
});

document.getElementById('flipBackBtn').addEventListener('click', function() {
    document.querySelector('.card').style.transform = 'rotateY(0deg)';
});

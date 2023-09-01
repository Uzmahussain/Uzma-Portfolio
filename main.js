
function openbar() {
    let sidebar = document.getElementById('openid');


    sidebar.style.width = '250px';
    sidebar.style.transition = '1s all';
}

function closebar() {

    let sidebar = document.getElementById('openid');

    sidebar.style.width = '0%';
    sidebar.style.transition = '1s all';
}
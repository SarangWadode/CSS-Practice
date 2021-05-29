const search = document.querySelector('.search-icon');
console.log(search);
search.addEventListener('click',function() {
    const searchBar = document.querySelector('.search');
    searchBar.classList.toggle('active');
    console.log(searchBar);
});

const menuIcon = document.querySelector('.menu-icon');
console.log(menuIcon);
menuIcon.addEventListener('click',function(){
    const menu = document.querySelector('.menu');
    console.log(menu);
    menu.classList.toggle('active')
    const panel = document.querySelector('.panel');
    console.log(panel);
    panel.classList.toggle('active')
})
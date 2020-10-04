var ham = document.getElementById('ham');
var x = document.getElementById('x');
ham.addEventListener('click', () =>{
    ham.classList.add("hidden");
    x.classList.remove("hidden");
    document.querySelector(".mobile-nav").classList.remove('hidden');
    console.log('a');
});

x.addEventListener('click', () =>{
    x.classList.add("hidden");
    ham.classList.remove("hidden");
    document.querySelector(".mobile-nav").classList.add('hidden');
    console.log('a');
});
let x = document.querySelector("body");
x.innerHTML = "<h2>My Favorite Programming Languages:</h2> <ul></ul>";
var data="";
var lang = ['HTML' , 'CSS' , 'JavaScript']

for (var i = 0; i < lang.length; i++) {
    data += `<li>${lang[i]}</li>`;
}

document.querySelector("ul").innerHTML=data;


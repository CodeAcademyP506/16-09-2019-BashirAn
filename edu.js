var esas = document.body;

esas.style.margin = "0px";
esas.style.padding = "0px";

var header = document.createElement("header");
var contain = document.createElement("div");
var logo = document.createElement("div");
var navbar = document.createElement("div");
var logo1 = document.createElement("span");
var navhome = ["Home", "About", "Services", "Contact"];
header.appendChild(contain)
contain.appendChild(logo)
contain.appendChild(navbar)
logo.appendChild(logo1)

header.style.width = "100%";
header.style.height = "55px";
header.style.backgroundColor = "black";
header.style.display = "flex";
header.style.justifyContent = "center";

contain.style.width = "75%";
contain.style.display = "flex";
contain.style.justifyContent = "space-between";
contain.style.alignItems = "center";

logo1.innerText = "Start Bootstrap";
logo1.style.color = "white";

for (var i = 0; i < navhome.length; i++) {
    var listNav= document.createElement("a");
    listNav.setAttribute("href", "#")
    listNav.setAttribute("class", "def")
    listNav.innerText = navhome[i]
    listNav.style.marginRight = "10px"
    listNav.style.color = "lightgrey"
    listNav.style.textDecoration = "none"
    listNav.addEventListener("mouseover", function () {
        this.style.color = "white"
    })
    listNav.addEventListener("mouseout", function () {
        this.style.color = "lightgrey"
    })
    navbar.appendChild(listNav)
}


esas.appendChild(header)

var content = document.createElement("section");
var divbox = document.createElement("div");
var sol = document.createElement("div");
var sag = document.createElement("div");
var shopname = document.createElement("h1");
var slider = document.createElement("div");
var cardBox = document.createElement("div")
var items = ["Item One", "Item Two", "Item Three", "Item Four", "Item Five", "Item Six"];

var categories = ["Category 1", "Category 2", "Category 3"]

content.style.width = "100%";
content.style.height = "auto";
content.style.display = "flex";
content.style.justifyContent = "center";

divbox.style.width = "70%";
divbox.style.display = "flex";
divbox.style.paddingTop = "10px";

sol.style.width = "28%";
sol.style.height = "auto";
sol.style.padding = "0 10px";

shopname.innerText = "Shop Name"
sol.appendChild(shopname)

for (var c = 0; c < categories.length; c++) {
    var kateqoriya = document.createElement("a");
    kateqoriya.setAttribute("href", "#");
    kateqoriya.innerText = categories[c];
    kateqoriya.style.padding = "10px 20px";
    kateqoriya.style.border = "1px solid lightgrey";
    kateqoriya.style.borderRadius = "2px";
    kateqoriya.style.display = "block";
    kateqoriya.style.color = "blue";
    kateqoriya.style.textDecoration = "none";

    kateqoriya.addEventListener("mouseover", function () {
        this.style.textDecoration = "underline";
    })
    kateqoriya.addEventListener("mouseout", function () {
        this.style.textDecoration = "none";
    })
    sol.appendChild(kateqoriya)
}

sag.style.width = "70%";
sag.style.height = "auto";
sag.style.paddinbg = "0 10px";

var btnLeft = document.createElement("div")
var btnRight = document.createElement("div")

slider.style.width = "100%";
slider.style.height = "280px";
slider.style.background = "gray";
slider.style.display = "flex";
slider.style.position = "relative";
slider.id = "sliderBox";
slider.style.overflow = "hidden";

btnLeft.style.position = "absolute"
btnLeft.style.width = "50px"
btnLeft.style.height = "280px"
btnLeft.style.background = "grey"
btnLeft.style.cursor = "pointer"
btnLeft.style.zIndex = "5"
btnLeft.addEventListener('mouseover',function(){
    this.style.backgroundColor = "darkgrey"

})
btnLeft.addEventListener('mouseout',function(){
    this.style.backgroundColor = "grey"
})

btnRight.style.position = "absolute"
btnRight.style.right = "0"
btnRight.style.width = "50px"
btnRight.style.height = "280px"
btnRight.style.background = "grey"
btnRight.style.cursor = "pointer"
btnRight.style.zIndex = "5"
btnRight.addEventListener('mouseover',function(){
    this.style.backgroundColor = "darkgrey"
})
btnRight.addEventListener('mouseout',function(){
    this.style.backgroundColor = "grey"
})

slider.appendChild(btnLeft)
slider.appendChild(btnRight)
sag.appendChild(slider)

for (var s = 1; s < 4; s++) {
    var image = document.createElement("img")
    image.setAttribute("src", `slider${s}.png`)
    image.setAttribute("class", "img")
    image.style.width = "100%"
    image.style.height = "280px"
    image.style.height = "280px"
    image.style.transition = "all 0.3s ease-in-out"
    slider.appendChild(image);
  
}

btnLeft.addEventListener("click", function () {
    var images = document.querySelectorAll('img');
        images[0].style.transform = "translateX(-100%)"
        images[1].style.transform = "translateX(-100%)"
})

btnRight.addEventListener("click", function () {
    var images = document.querySelectorAll('img');
        images[1].style.transform = "translateX(0%)"
        images[0].style.transform = "translateX(0%)"
})

cardBox.style.display = 'flex';
cardBox.style.flexWrap = 'wrap';
cardBox.style.justifyContent = 'space-between';
cardBox.style.marginTop = '20px';

for (var item = 0; item < items.length; item++) {
    var card = document.createElement("div");
    var imgBox = document.createElement("div")
    var card1 = document.createElement("div")
    var cardContent = document.createElement("h4")
    var qiymet = document.createElement("h4")
    var info = document.createElement("span")
    var point = document.createElement("div")

     card.style.width = "32%";
    card.style.height = "350px";
    card.style.border = "1px solid grey";
    card.style.marginBottom = "10px";
    card.style.borderRadius = "3px";

    imgBox.style.width = "100%";
    imgBox.style.height = "130px";
    imgBox.style.backgroundImage = "url('700x400.png')";
    imgBox.style.backgroundSize = "cover";
    imgBox.style.backgroundRepeat = "no-repeat";
    imgBox.style.backgroundPosition = "50%";
    card.appendChild(imgBox)

    card1.style.width = "100%";
    card1.style.height = "170px";
    card1.style.padding = "10px";
    card1.style.boxSizing = "border-box";

    cardContent.innerText = items[item]
    cardContent.style.color = "blue"

    card.appendChild(card1)
    card1.appendChild(cardContent)

    qiymet.innerText = "$24.99"
    card1.appendChild(qiymet)

    info.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    card1.appendChild(info)

    point.style.width = "100%";
    point.style.height = "40px";
    point.style.marginTop = "10px";
    point.style.padding = "6px 10px";
    point.style.boxSizing = "border-box";
    point.style.borderTop = "1px solid grey";
    point.style.backgroundColor = "lightgrey"
    point.innerText = "★ ★ ★ ★ ☆"
    card.appendChild(point)

    cardBox.appendChild(card)
}

sag.appendChild(cardBox)
divbox.appendChild(sol)
divbox.appendChild(sag)
content.appendChild(divbox);
esas.appendChild(content);

var footer = document.createElement("footer");
var Copyright = document.createElement("p");
footer.style.width = "100%";
footer.style.height = "120px";
footer.style.backgroundColor = "rgb(33, 37, 41)";
footer.style.textAlign = "center";
Copyright.innerText = "Copyright © Your Website 2019";
Copyright.style.lineHeight = "120px";
Copyright.style.color = "white";
footer.appendChild(Copyright);
esas.appendChild(footer);
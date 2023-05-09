

function menu(id, name, description, price, image){
	this.id = id
	this.name = name
	this.description = description
	this.price = price
	this.image = image
}

// create new products from the product constructor
var menu1 = new menu (1, ' French fries', 'Crispy, golden French fries made from premium potatoes and fried to perfection.', 10, 'images/french-fries.jpg')
var menu2 = new menu (2, 'Chicken nuggets', 'Juicy, tender chicken nuggets with a crispy, golden-brown coating.', 18, 'images/chicken-nuggets.jpg')
var menu3 = new menu (3, 'Mozerella sticks','Melted, gooey mozzarella cheese enveloped in a crispy breadcrumb coating.', 15, 'images/mozzarella-sticks.jpg')
var menu4 = new menu (4, 'Sweet potato fries', 'Crispy and savory sweet potato fries, lightly seasoned and served hot.', 12, 'images/sweet-potato-fries.jpg')
var menu5 = new menu (5, 'Onion rings', 'Crunchy, golden-brown onion rings with a perfectly seasoned batter.', 15, 'images/onion-rings.jpg')




var menuArray = new Array



menuArray.push(menu1, menu2, menu3, menu4, menu5)


for(var i = 0; i < menuArray.length; i++) {

	var newItem = document.createElement("div")
	var newDiv = document.createElement("div")
	var idH1 = document.createElement("h1")
	var nameH3 = document.createElement("h3")
	var descriptionH5 = document.createElement("h5")
	var priceH4 = document.createElement("h4")
	var image = document.createElement("img")
	var btn = document.createElement("button")
	var icon = document.createElement("glyphicon")


	

	var tid = document.createTextNode(menuArray[i].id)
	var tName = document.createTextNode(menuArray[i].name)
	var tDescription = document.createTextNode(menuArray[i].description)
	var tPrice = document.createTextNode("SR" + menuArray[i].price)
	var tButton = document.createTextNode(" Add to cart")
	var btn = document.createElement("button");
btn.setAttribute("class", "addToCart");
btn.setAttribute("onclick", "displayItemsCount()");


	
	image.src = menuArray[i].image

	image.className = "img-responsive"
	btn.className = "btn-order"
	newItem.className = "col-sm-6 col-md-4"
	newDiv.className = "menu menuName" + [i] + " thumbnail"
	priceH4.className = "price" 
	descriptionH5.className = "caption > p"
	icon.className ="glyphicon glyphicon-shopping-cart"
	

	
	idH1.appendChild(tid)
	nameH3.appendChild(tName)
	descriptionH5.appendChild(tDescription)
	priceH4.appendChild(tPrice)
	btn.appendChild(icon)
	btn.appendChild(tButton)
	


	newDiv.appendChild(nameH3)
	newDiv.appendChild(image)
	newDiv.appendChild(idH1)
	newDiv.appendChild(descriptionH5)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(btn)


	newItem.appendChild(newDiv)

	
	document.getElementById("menu").appendChild(newItem)
	
}
let itemsCountDiv = document.querySelector(".itemsCount");
      let cartIcon = document.querySelector(".cartIcon");

      let itemsCount = 1;

      function displayItemsCount() {
        itemsCountDiv.style.display = "block";
        itemsCountDiv.classList.add("appear");
        cartIcon.classList.add("flicker");
        itemsCountDiv.innerHTML = itemsCount;

        setTimeout(() => {
          itemsCountDiv.classList.remove("appear");
          cartIcon.classList.remove("flicker");
        }, 250);

        itemsCount++;
      }

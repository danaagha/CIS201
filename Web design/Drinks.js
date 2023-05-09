


function menu(id, name, price, image){
	this.id = id
	this.name = name
	this.price = price
	this.image = image
}


var menu1 = new menu (1, ' pepsi', 3.5, 'images/pepsi.png')
var menu2 = new menu (2, 'Coca cola', 3.5, 'images/Coca cola.png')
var menu3 = new menu (3, 'Sprite', 3.5, 'images/sprite.png')
var menu4 = new menu (4, 'Mirinda', 3.5, 'images/mirinda.png')
var menu5 = new menu (5, 'Water', 3, 'images/evian.png')





var menuArray = new Array



menuArray.push(menu1, menu2, menu3, menu4, menu5,)


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
	
	icon.className ="glyphicon glyphicon-shopping-cart"
	


	idH1.appendChild(tid)
	nameH3.appendChild(tName)
	
	priceH4.appendChild(tPrice)
	btn.appendChild(icon)
	btn.appendChild(tButton)
	

	
	newDiv.appendChild(nameH3)
	newDiv.appendChild(image)
	newDiv.appendChild(idH1)
	
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

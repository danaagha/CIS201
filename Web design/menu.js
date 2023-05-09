

function menu(id, name, description, price, image){
	this.id = id
	this.name = name
	this.description = description
	this.price = price
	this.image = image
}


var menu1 = new menu (1, ' Buffalo Chicken Burger Spicy', 'Crispy chicken breast, lettuce, tomato, pickles, spicy buffalo sauce, orgada sauce.', 22, 'images/Screenshot 2023-04-05 011347.png')
var menu2 = new menu (2, 'Picasso Chicken Burger', 'Crispy chicken breast, lettuce, tomato, melted cheddar cheese, two mozzarella sticks, bbq sauce.', 27, 'images/Screenshot 2023-04-05 010634.png')
var menu3 = new menu (3, 'Mexicano Chicken Burger Spicy','Fresh grilled chicken breast, lettuce, tomato, pickles, cheddar cheese slices, Mexicano sauce and orgada sauce.', 26, 'images/Screenshot 2023-04-05 013319.png')
var menu4 = new menu (4, 'Royal Chicken Burger', 'Fresh grilled chicken breast, lettuce, tomatoes, pickles, barbecue sauce and orgada sauce.', 25, 'images/Screenshot 2023-04-05 012011.png')
var menu5 = new menu (5, 'Classic Beef Burger', '120 gm Angus beef, lettuce, tomato, pickles, onion, cheddar cheese slices and orgada sauce.', 30, 'images/Screenshot 2023-04-05 013345.png')
var menu6 = new menu (6, 'Texas Beef Burger','120 gm angus beef, lettuce, tomatoes, pickles, 2 pieces onion rings, nachos saturated with melted cheddar cheese and orgada sauce.', 27, 'images/Screenshot 2023-04-05 023356.png')
var menu7 = new menu (7, 'Mushroom White Beef Burger', '120 gm angus beef, lettuce, pickles, caramelized onion, smoked cheese, fresh mushrooms, white mushroom sauce and orgada sauce.', 25, 'images/Screenshot 2023-04-05 013742.png')
var menu8 = new menu (8, 'Milano Beef Burger','120 gm Angus beef, lettuce, tomatoes, pickles, caramelized onions, two mozzarella sticks, roast beef and orgada sauce.', 30, 'images/Screenshot 2023-04-05 013439.png')
var menu9 = new menu (9, 'Brisket Beef Burger', '100 Grams brisket beef, 120 grams beef patty, 2 slice cheedar cheese, capsicum, fresh Onions, barbecue sauce, Orgada sauce', 35, 'images/Screenshot 2023-04-05 020505.png')




var menuArray = new Array



menuArray.push(menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9)


for(var i = 0; i < menuArray.length; i++) {
	// creation the element
	var newItem = document.createElement("div")
	var newDiv = document.createElement("div")
	var idH1 = document.createElement("h1")
	var nameH3 = document.createElement("h3")
	var descriptionH5 = document.createElement("h5")
	var priceH4 = document.createElement("h4")
	var image = document.createElement("img")
	var btn = document.createElement("button")
	var icon = document.createElement("glyphicon")
var btn = document.createElement("button");
btn.setAttribute("class", "addToCart");
btn.setAttribute("onclick", "displayItemsCount()");


	var tid = document.createTextNode(menuArray[i].id)
	var tName = document.createTextNode(menuArray[i].name)
	var tDescription = document.createTextNode(menuArray[i].description)
	var tPrice = document.createTextNode("SR" + menuArray[i].price)
var tButton = document.createTextNode(" add to cart")



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

// Sample menu data (Consider fetching this data from a server in a real-world scenario)
let menu ={
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
const menueContainer = document.getElementById('menu');
    // Loop through each category and its items in the menu object
for (const category in menu){
 // Create an element to represent the category
    if (menu.hasOwnProperty(category)){

    const categoryElement = document.createElement('div');
    categoryElement.innerHTML = `<h3>${category}<h3/>`;
    menueContainer.appendChild(categoryElement); 
    // Append a list of items element to the menu container  
    const itemList = document.createElement('ul'); 
    menueContainer.appendChild(itemList); 
    menu[category].forEach(item => {
    const listItem = document.createElement('li'); 
  // Create a list item element
    listItem.textContent = item;
 // Attach a click event listener to the list item to add it to the order
    listItem.addEventListener('click', () => addToOrder)
 // Append the list item to the list of items   
    itemList.appendChild(listItem); 

    });
    
   }
}
         
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
const orderItemsList = documet.getElementById('order-items'); 
    // Create a list item for the order
const orderTotalElement = document.getElementById('order-total')
    // Set the text content of the list item to the item name
const listItem = document.createElement('li'); 
listItem.textContent = itmeName;
//Append the list item to the order items list// 
orderItemsList.appendChild(listItem); 

    // Calculate and update the total price
const itemPrice = 10; 
const currentTotal = parseFloat(orderTotalElement.textContent); 
 // Update the text content of the order total element with the new total
 const newTotal = currentTotal + itemPrice;
 orderTotalElement.textContent = newTotal.toFixed(2); 
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);

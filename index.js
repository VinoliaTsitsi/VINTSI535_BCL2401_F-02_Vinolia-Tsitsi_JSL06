// Sample menu data (Consider fetching this data from a server in a real-world scenario)
let menu = {
    Starters: [{name: "Garlic Bread", price: 5}, {name: "Bruschetta", price: 6}],
    MainCourses: [{name: "Margherita Pizza", price: 10}, {name: "Spaghetti Carbonara", price: 12}],
    Desserts: [{name: "Tiramisu", price: 8}, {name: "Cheesecake", price: 7}]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        if (menu.hasOwnProperty(category)) {
            const categoryElement = document.createElement('div');
            categoryElement.innerHTML = `<h3>${category}</h3>`;
            menuContainer.appendChild(categoryElement);

            // Append a list of items element to the menu container
            const itemList = document.createElement('ul');
            menuContainer.appendChild(itemList);

            menu[category].forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name}`;
                // Attach a click event listener to the list item to add it to the order
                listItem.addEventListener('click', () => addToOrder(item));
                // Append the list item to the list of items
                itemList.appendChild(listItem);
            });
        }
    }
}

// Callback function for adding an item to the order
function addToOrder(item) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const listItem = document.createElement('li');
    // Set the text content of the list item to the item name
    listItem.textContent = `${item.name}`;
    // Append the list item to the order items list
    orderItemsList.appendChild(listItem);

    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElement.textContent);
    // Update the text content of the order total element with the new total
    const newTotal = currentTotal + item.price;
    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);


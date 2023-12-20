document.addEventListener("DOMContentLoaded", function () {
    const menuList = document.getElementById("menu-list");

    // Sample data (replace this with data from your backend)
    const menuItems = [
        { name: "Burger", category: "Lunch", price: 5.99 },
        { name: "Pizza", category: "Dinner", price: 8.99 },
        { name: "Salad", category: "Lunch", price: 4.99 },
        // Add more menu items with different categories
    ];

    const menuCategories = [...new Set(menuItems.map(item => item.category))];

    // Display menu items
    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${item.name}</span><span>${item.category}</span><span>$${item.price.toFixed(2)}</span>`;
        menuList.appendChild(li);
    });

    // Handle the Specials tile click
    const specialsTile = document.getElementById("specials-tile");
    specialsTile.addEventListener("click", function () {
        // Redirect to a random category page
        const randomCategory = getRandomCategory();
        window.location.href = `category.html?category=${randomCategory}`;
    });

    // Function to get a random category
    function getRandomCategory() {
        const randomIndex = Math.floor(Math.random() * menuCategories.length);
        return menuCategories[randomIndex];
    }
});

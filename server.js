const express = require('express');
const app = express();
const port = 3000;

// Sample data (replace this with data from your database)
const menuItems = [
    { name: "Burger", price: 5.99 },
    { name: "Pizza", price: 8.99 },
    { name: "Salad", price: 4.99 },
];

app.get('/api/menu', (req, res) => {
    res.json(menuItems);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

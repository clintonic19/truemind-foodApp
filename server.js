const express = require('express');
const app = express();

app.use(express.json());

// --- Simulated Database ---
let users = [];
let foods = [
    { id: 1, name: "Margherita Pizza", price: 12.99 },
    { id: 2, name: "Veggie Burger", price: 8.50 }
];
let cart = [];
let orders = [];

// --- OPTION A: User API ---
app.post('/signup', (req, res) => {
    const { email, password, phoneNumber } = req.body;
    const newUser = { email, password, phoneNumber, verified: false };
    users.push(newUser);
    res.status(201).json({ message: "User registered. Please verify.", user: email });
});

app.post('/verify', (req, res) => {
    const { email, otp } = req.body;
    // Simple logic: if OTP is '1234', verify user
    if (otp === '1234') {
        const user = users.find(u => u.email === email);
        if (user) user.verified = true;
        return res.json({ message: "Account verified successfully!" });
    }
    res.status(400).json({ message: "Invalid OTP" });
});

// --- OPTION B: Food/Menu API ---
app.get('/foods', (req, res) => {
    res.json(foods);
});

app.post('/foods', (req, res) => {
    const { name, price } = req.body;
    const newFood = { id: foods.length + 1, name, price };
    foods.push(newFood);
    res.status(201).json(newFood);
});

// // --- OPTION D & E: Cart API ---
// app.post('/cart', (req, res) => {
//     const { foodId, quantity } = req.body;
//     const item = foods.find(f => f.id === foodId);
//     if (!item) return res.status(404).json({ message: "Food not found" });
    
//     const cartItem = { ...item, quantity };
//     cart.push(cartItem);
//     res.json({ message: "Added to cart", cart });
// });

// app.get('/cart', (req, res) => {
//     res.json(cart);
// });

// // --- OPTION F: Clear Cart ---
// app.delete('/cart', (req, res) => {
//     cart = [];
//     res.json({ message: "Cart cleared" });
// });

// // --- OPTION C: Order API ---
// app.post('/orders', (req, res) => {
//     if (cart.length === 0) return res.status(400).json({ message: "Cart is empty" });
    
//     const newOrder = {
//         id: orders.length + 1,
//         items: [...cart],
//         status: "Pending",
//         total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
//     };
//     orders.push(newOrder);
//     cart = []; // Clear cart after ordering
//     res.status(201).json(newOrder);
// });

// app.get('/orders/:id', (req, res) => {
//     const order = orders.find(o => o.id === parseInt(req.params.id));
//     order ? res.json(order) : res.status(404).json({ message: "Order not found" });
// });

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
import React, { useState } from 'react';
import './Menu.css';


const menuData = {
    "Fruits and Vegetables": [
        { id: 1, name: "Apple", price: "$1.45" },
        { id: 2, name: "Banana", price: "$0.45" }
    ],
    "Bakery": [
        { id: 1, name: "Bread", price: "$2.00" },
        { id: 2, name: "Croissant", price: "$1.50" }
    ],
    "Meat and Seafood": [
        { id: 1, name: "Italian-Style Chicken Meatballs", price: "$8.45" },
        { id: 2, name: "Seafoods Stuffed Alaskan Salmon", price: "$8.45" },
        { id: 3, name: "Choice Angus Beef Stew Meat", price: "$8.45" },
        { id: 4, name: "Crispy Classic Buffalo Wings", price: "$8.45" } 
    ],
    "Beverage": [
        { id: 1, name: "Orange Juice", price: "$3.45" },
        { id: 2, name: "Milk", price: "$2.45" }
    ],
    "Biscuit and Snacks": [
        { id: 1, name: "Chocolate Chip Cookies", price: "$1.45" },
        { id: 2, name: "Potato Chips", price: "$1.00" }
    ]
};

function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("Meat and Seafood");

    return (
        <div className="menu-container">
            <h2>Shop by Category</h2>
            <h1>Top Category Of Organic Food</h1>
            <div className="category-buttons">
                {Object.keys(menuData).map(category => (
                    <button 
                        key={category} 
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "active" : ""}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="menu-items">
                {menuData[selectedCategory].map(item => (
                    <div className="menu-item" key={item.id}>
                        {/* <img src={item.img} alt={item.name} /> */}
                        <div className="item-info">
                            <h3>{item.name}</h3>
                            <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
                        </div>
                        <div className="item-price">{item.price}</div>
                        <button className="shop-now">Shop Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;

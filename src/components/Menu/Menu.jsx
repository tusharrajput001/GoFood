import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Menu.css';

function Menu() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch list of categories
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then(response => {
                const categoryList = response.data.meals;
                setCategories(categoryList);
                if (categoryList.length > 0) {
                    setSelectedCategory(categoryList[0].strCategory);
                }
            })
            .catch(error => {
                console.error('Error fetching the categories:', error);
            });
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            setLoading(true);
            // Fetch data of selected category
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
                .then(response => {
                    setMenuItems(response.data.meals);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching the data:', error);
                    setLoading(false);
                });
        }
    }, [selectedCategory]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="menu-container">
            <h2>Shop by Category</h2>
            <h1>Top Category Of Organic Food</h1>
            <div className="category-buttons">
                {categories.map(category => (
                    <button 
                        key={category.strCategory} 
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedCategory(category.strCategory);
                        }}
                        className={selectedCategory === category.strCategory ? "active" : ""}
                    >
                        {category.strCategory}
                    </button>
                ))}
            </div>
            <div className="menu-items">
                {menuItems.map(item => (
                    <div className="menu-item" key={item.idMeal}>
                        <img src={item.strMealThumb} alt={item.strMeal} />
                        <div className="item-info">
                            <h3>{item.strMeal}</h3>
                            <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
                        </div>
                        <div className="item-price">₹500</div>
                        <button className="shop-now">Shop Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;

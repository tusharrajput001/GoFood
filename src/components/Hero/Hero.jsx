import React from 'react';
import './Hero.css';
import plateImage from  "../../assets/veg.png"

function Hero() {
    return (
        <div className='hero-container'>
            <div className='green-part'></div>
            <div className='hero-content'>
                <h2>Discount up to 20%</h2>
                <h1>Buy Fresh And Organic Grocery Food</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit purus nec nibh tortor ipsum. Placerat consequat lorem.</p>
                <button>Shop Now</button>
                <div className='stats'>
                    <div>
                        <h3>35k+</h3>
                        <p>Users</p>
                    </div>
                    <div>
                        <h3>18k+</h3>
                        <p>Products</p>
                    </div>
                </div>

                
            </div>
            <img src={plateImage} alt="Plate of Food" className='hero-image'/>
        </div>
    );
}

export default Hero;

/* eslint-disable react/prop-types */
import { useState } from 'react';

import "./App.css"

function App() {

  const [count,setCount] = useState(0); //For number of cart items 

  const data = [ // Data for each products
    {
      productName:"Apple Watch",
      price:"$299.99",
      rating:"\u2B50\u2B50\u2B50\u2B50\u2B50",
      sale:"sale",
      img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      alt:"product",
    },
    {
      productName:"Iphone 15 Pro Max",
      price:"$1999.00",
      prePrice:"$2900.00",
      img:"https://i.pinimg.com/236x/fd/ce/9e/fdce9ef3a8cb9f6d64f1a6c4cd2bf9da.jpg",
      alt:"product",
    },
    {
      productName:"Apple Pencil (2nd Generation)",
      price:"$250.00",
      rating:"\u2B50\u2B50\u2B50\u2B50",
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK0C2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1564075356758",
      alt:"product",
    },
    {
      productName:"play station 5",
      price:"$488.00",
      sale:"sale",
      img:"data:image/jpeg;base64,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",
      alt:"product",
    },
    {
      productName:"Apple MacBook Pro 2023 (M3 Pro)",
      price:"$2800.00",
      prePrice:"$3000.00",
      img:"https://www.getuscart.com/images/thumbs/1242355_apple-2022-macbook-pro-laptop-with-m2-chip-13-inch-retina-display-8gb-ram-512gb-ssd-storage-touch-ba_550.jpeg",
      alt:"product",
    },
    {
      productName:"Apple Airpods Pro ",
      price:"$198.25",
      rating:"\u2B50\u2B50\u2B50\u2B50",
      sale:"sale",
      img:"https://i.pinimg.com/236x/04/9c/b7/049cb7974eb461fff93bc27fecc93e3e.jpg",
      alt:"product",
    },
    {
      productName:"marshell",
      price:"$299.69",
      sale:"sale",
      prePrice:"$379.00",
      img:"https://i.pinimg.com/236x/d6/6e/c3/d66ec3f949c731314cb34bd750e03d3b.jpg",
      alt:"product",
    },
    {
      productName:"Ipad pro M2 Chip",
      price:"$1200",
      rating:"\u2B50\u2B50\u2B50\u2B50\u2B50",
      img:"https://i.pinimg.com/236x/8d/85/f8/8d85f8ead91c45212fbad08e64bd1894.jpg",
      alt:"product",
    },  
  ];

  return (
    <div className='main'>

      <Header count={count}/>

      <main className="main-container">
          {data.map((cards, idx) => 
          <ProductCard key={idx}
          Name = {cards.productName}
          price = {cards.price}
          rating = {cards.rating}
          setCount = {setCount}
          count = {count}
          sale = {cards.sale}
          img = {cards.img}
          alt = {cards.alt}
          prePrice = {cards.prePrice}
          />)}
      </main>

      <Footer/>
       
    </div>
  )
}

export default App

function Header(prop){
  //Showing Navigation when clicked
  const [navClick,setNavClick] = useState(false);

  function handleNavClick(){
    setNavClick(!navClick)
  }

  return (
    <>

    <div className={navClick ? "nav-container active": "nav-container"}>
        <nav className="nav-head">

            <span className="nav-name">MyShop.com</span>

            <div className={navClick ? "nav-menu active": "nav-menu"}>
                <ol>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li>
                        <a href="#">Shop</a>
                    </li>
                </ol>

                <div className="cart">
                    <span className="cart-img">&#128722;</span>
                    <span>Cart</span>
                    <span className="count">{prop.count}</span>
                </div>
            </div>

            <div className='menu-burger' onClick={handleNavClick}>&#9776;</div>

        </nav>
    </div>

    <div className="banner">
            <h2>Shop in Style</h2>
            <h5>Lorem ipsum dolor sit amet</h5>
    </div>

    </>
  )
}


//Card Components

function ProductCard({Name,price,rating,setCount,sale,img,alt,prePrice}){
  
  //Changing the state of the Button
  const [buttonName, setButtonName] = useState("Add to Cart");

  const handleClick = () => {
    if(buttonName === "Add to Cart"){
      setButtonName("Remove from Cart");
      setCount(count => count+1);
    }else{
      setButtonName("Add to Cart");
      setCount(count => count-1);
    }
  };

  return (
    <div className="card">

      <p className="card-image">
        <img src={img} alt={alt} />
        <span className={sale ? "sale active" : "sale"}>Sale</span>
      </p>

      <div className="card-content">

        <div className="card-details">
          <h3 className="product-name">{Name}</h3>
          <p className="rating" style={rating ? {} : {display: "none"}}>
            {rating}
          </p>
          <p className="price">
            <span className={prePrice ? "pre-price active": "pre-price"}>
              <del>{prePrice}</del> -</span>
            {price}
          </p>
        </div>

        <div className="btn-grp">
          <button className="btn" onClick={handleClick}>
            {buttonName}
          </button>
        </div>

      </div>

    </div>
  )
}

function Footer(){
  const date = new Date();
  return (
    <footer>
      <p>CopyRight &#169; Your Shopping Website {date.getFullYear()} </p>
    </footer>
  )
}
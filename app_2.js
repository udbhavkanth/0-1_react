import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  - Logo
 *  - Nav Items
 * 
 * Body 
 *   - Search
 *   - RestaurantContainer 
 *   - RestaurantCard
 * Footer
 *  -Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-2048x1365.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}
//({resName, cuisine}) -  this is destructuring on the fly




const RestaurantCard = (props) =>{
    const {name, cuisines, avgRating, deliveryTime,image} = props?.resData;
    
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo"  src={image}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>

        </div>
    )
}


const resList = [
  /* ─────────── existing two ─────────── */
  {
    id: "340465",
    name: "La Pino'z Pizza",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.2,
    totalRatings: "9.2K+",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/m1y45zbvi4uk1bz4cymd",
    deliveryTime: "25-30 mins",
    costForTwo: "₹200 for two",
    areaName: "Swaroop Nagar",
    isOpen: true
  },
  {
    id: "520074",
    name: "Kanpuriya Chokas Pizza Point",
    cuisines: ["Pizzas", "Fast Food", "Desserts", "Beverages"],
    avgRating: 4.4,
    totalRatings: "2.9K+",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/099a12872af3fad119e4d06e92c30287",
    deliveryTime: "35-40 mins",
    costForTwo: "₹250 for two",
    areaName: "Ashok Nagar",
    isOpen: true
  },

  /* ─────────── six more for a “long” list ─────────── */
  {
    id: "334231",
    name: "Pizza Hut",
    cuisines: ["Pizzas"],
    avgRating: 4.1,
    totalRatings: "4.9K+",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/e5a75111-7198-4b3a-8a38-548f96da7cc3_334231.JPG",
    deliveryTime: "30-35 mins",
    costForTwo: "₹350 for two",
    areaName: "Kidwai Nagar",
    isOpen: true
  },
  {
    id: "416290",
    name: "Pizza Cave",
    cuisines: ["Pizzas", "Desserts", "Snacks", "Pastas"],
    avgRating: 4.3,
    totalRatings: "5.7K+",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/21/04211291-3295-431f-88ce-66c46dd06e68_416290.jpg",
    deliveryTime: "25-30 mins",
    costForTwo: "₹200 for two",
    areaName: "Rai Purwa",
    isOpen: true
  },
  {
    id: "333001",
    name: "Domino's Pizza",
    cuisines: ["Pizzas", "Italian"],
    avgRating: 4.0,
    totalRatings: "8.1K+",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mje3q4ktc4kgqr8a3hjs",
    deliveryTime: "20-25 mins",
    costForTwo: "₹300 for two",
    areaName: "Civil Lines",
    isOpen: true
  },
  {
    id: "550201",
    name: "Oven Story Pizza",
    cuisines: ["Pizzas", "Fast Food"],
    avgRating: 4.2,
    totalRatings: "3.6K+",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ajyrrwhzfsbk0uzxxtoj",
    deliveryTime: "30-35 mins",
    costForTwo: "₹300 for two",
    areaName: "Govind Nagar",
    isOpen: true
  },
  {
    id: "603102",
    name: "Mojo Pizza – 2X Toppings",
    cuisines: ["Pizzas", "Italian", "Desserts"],
    avgRating: 4.3,
    totalRatings: "2.1K+",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dljjq8c4il6j8rj9ekzs",
    deliveryTime: "28-33 mins",
    costForTwo: "₹250 for two",
    areaName: "Yashoda Nagar",
    isOpen: true
  },
  {
    id: "445522",
    name: "Chicago Pizza",
    cuisines: ["Pizzas", "Beverages"],
    avgRating: 4.1,
    totalRatings: "1.5K+",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gpav8isx0aekxxfrl7rk",
    deliveryTime: "32-37 mins",
    costForTwo: "₹400 for two",
    areaName: "Tilak Nagar",
    isOpen: true
  },
  {
    id: "571244",
    name: "The Pizza Box",
    cuisines: ["Pizzas", "Pastas", "Mexican"],
    avgRating: 4.0,
    totalRatings: "918+",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ir8xrdhjj1b3weji0tsz",
    deliveryTime: "30-35 mins",
    costForTwo: "₹220 for two",
    areaName: "Kakadeo",
    isOpen: true
  }
];


const Body =() =>{
    return(
        <div className="body">
            <div className="search"> 
                search
            </div>
            <div className="res-container">
                {resList.map((resturant) => (
                    <RestaurantCard key={resturant.id} resData ={resturant}/>
                ))}
            </div>

        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
 }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

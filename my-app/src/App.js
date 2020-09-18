import React, { useState } from "react";
import Header from "./components/navbar/navbar";
import ProductCard from "./components/productCard/productCard";
import "./App.css";

const App = () => {
	const [products, setProducts] = useState([
		{
			productName: "Product One",
			productPrice: 50,
			productDescription: "First product to render",
			productImage:
				"https://elcopcbonline.com/var/photo/product/2000x4000/112/368/huf-converse-product-red-skidgrip-1.jpg",
		},
		{
			productName: "Product Two",
			productPrice: 75,
			productDescription: "Second product to render",
			productImage:
				"https://www.karniinfotech.com/images/portfolio/photography/1.jpg",
		},
		{
			productName: "Product Three",
			productPrice: 75,
			productDescription: "Third product to render",
			productImage:
				"https://cdn.dashhudson.com/media/640/1572361963.115447556367.jpeg",
		},
	]);
	return (
		<div className="App">
			{/* <header className="App-header"></header> */}
			<Header />
			<ProductCard products={products} />
		</div>
	);
};

export default App;

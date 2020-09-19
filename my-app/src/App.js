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
				"https://mdbootstrap.com/img/Others/documentation/img%20(40)-mini.jpg",
		},
		{
			productName: "Product Two",
			productPrice: 75,
			productDescription: "Second product to render",
			productImage:
				"https://mdbootstrap.com/img/Others/documentation/img%20(150)-mini.jpg",
		},
		{
			productName: "Product Three",
			productPrice: 75,
			productDescription: "Third product to render",
			productImage:
				"https://mdbootstrap.com/img/Others/documentation/img%20(145)-mini.jpg",
		},
	]);
	console.log(products);
	return (
		<div className="App">
			{/* <header className="App-header"></header> */}
			<Header />
			<ProductCard products={products} />
		</div>
	);
};

export default App;

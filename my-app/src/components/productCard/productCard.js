import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import ProductItem from "../productItem/productItem";

const ProductCard = ({ products }) => {
	console.log(products);
	const items = products;
	return (
		<section className="text-center my-5">
			<MDBRow>
				<ProductItem items={items} />
			</MDBRow>
		</section>
	);
};

export default ProductCard;

import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import ProductItem from "../productItem/productItem";

const ProductCard = ({ props }) => {
	const items = props;
	return (
		<section className="text-center my-5">
			<MDBRow>
				<MDBCol lg="3" md="12" className="mb-lg-0 mb-4"></MDBCol>
				<ProductItem items={items} />
			</MDBRow>
		</section>
	);
};

export default ProductCard;

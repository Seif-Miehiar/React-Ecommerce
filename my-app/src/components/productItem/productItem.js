import React from "react";
import {
	MDBCard,
	MDBCardImage,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardFooter,
	MDBTooltip,
} from "mdbreact";

const ProductItem = ({ items }) => {
	if (!items || items.length === 0) {
		return "Loading...";
	} else {
		return items.map((item, index) => {
			return (
				<MDBCard wide ecommerce>
					<MDBCardImage
						cascade
						src={item.productImage}
						top
						alt="sample photo"
					/>
					<MDBCardBody cascade className="text-center">
						<a href="#!" className="text-muted">
							<h5>catagory</h5>
						</a>
						<MDBCardTitle>
							<strong>
								<a href="#!">{item.productName}</a>
							</strong>
						</MDBCardTitle>
						<MDBCardText>{item.productDescription}</MDBCardText>
						<MDBCardFooter className="px-1">
							<span className="float-left font-weight-bold">
								<strong>{item.productPrice}$</strong>
							</span>
							<span className="float-right">
								<MDBTooltip domElement placement="top">
									<i className="grey-text fa fa-eye mr-3" />
									<span>Quick Look</span>
								</MDBTooltip>{" "}
								<MDBTooltip domElement placement="top">
									<i className="grey-text fa fa-heart" />
									<span>Add to Whishlist</span>
								</MDBTooltip>
							</span>
						</MDBCardFooter>
					</MDBCardBody>
				</MDBCard>
			);
		});
	}
};

export default ProductItem;

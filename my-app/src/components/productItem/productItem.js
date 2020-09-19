import React from "react";
import RatingPage from "../rating/rating";
import ShowItem from "../item/item";
import {
	MDBCard,
	MDBCardImage,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardFooter,
	MDBTooltip,
	MDBCol,
} from "mdbreact";

const ProductItem = ({ items }) => {
	console.log({ items });
	if (!items || items.length === 0) {
		return "Loading...";
	} else {
		return items.map((item, index) => {
			return (
				<MDBCol key={index} lg="4" md="12" className="mb-lg-1 mb-4 my-5">
					<MDBCard wide ecommerce>
						<MDBCardImage
							className="img-fluid mx-auto"
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
									</MDBTooltip>
									<MDBTooltip domElement placement="top">
										<i className="grey-text fa fa-heart" />
										<span>Add to Wishlist</span>
									</MDBTooltip>
								</span>
							</MDBCardFooter>
						</MDBCardBody>
					</MDBCard>
					<ShowItem item={item} />
					<RatingPage />
				</MDBCol>
			);
		});
	}
};

export default ProductItem;

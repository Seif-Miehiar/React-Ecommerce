import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const Reviews = (props) => {
	console.log(props.revs);
	if (!props || props.length === 0) {
		return "No reviews yet on this product!";
	} else {
		return props.revs.map((review, index) => {
			return (
				<MDBContainer>
					<MDBListGroup key={index} style={{ width: "22rem auto" }}>
						<MDBListGroupItem active href="#">
							<div className="d-flex w-100 justify-content-between">
								<h5 className="mb-1">review user name</h5>
								<small>3 days ago</small>
							</div>
							<p className="mb-1">{review}</p>
							<small>any extra information on this review</small>
						</MDBListGroupItem>
					</MDBListGroup>
				</MDBContainer>
			);
		});
	}
};

export default Reviews;

import React, { useState } from "react";
import Reviews from "../reviews/reviews";
import {
	MDBContainer,
	MDBBtn,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter,
} from "mdbreact";

const ShowItem = ({ props }) => {
	console.log(props.item.productReviews);
	const revs = props.item;
	const [modal, setModel] = useState(false);
	// setReviews(props.item);
	console.log(revs);

	const toggle = () => {
		setModel(!modal);
	};

	return (
		<MDBContainer>
			<MDBBtn color="primary" onClick={toggle}>
				MDBModal
			</MDBBtn>
			<MDBModal isOpen={modal} toggle={toggle} centered>
				<MDBModalHeader toggle={toggle}>
					{" "}
					{props.item.productName}{" "}
				</MDBModalHeader>
				<MDBModalBody>{props.item.productDescription}</MDBModalBody>
				<Reviews revs={revs} />
				<MDBModalFooter>
					<MDBBtn color="secondary" onClick={toggle}>
						Close
					</MDBBtn>
					{/* <MDBBtn color="primary">Save changes</MDBBtn> */}
				</MDBModalFooter>
			</MDBModal>
		</MDBContainer>
	);
};

export default ShowItem;

import React, { Fragment, useState } from "react";
import Reviews from "../reviews/reviews";
import {
	MDBContainer,
	MDBBtn,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter,
	MDBCardImage,
} from "mdbreact";

const ShowItem = (props) => {
	const [modal, setModel] = useState(false);
	const [revs, setRevs] = useState(props.itemOne.productReviews);

	const toggle = () => {
		setModel(!modal);
	};

	return (
		<Fragment>
			<MDBContainer>
				<MDBBtn color="primary" onClick={toggle}>
					MDBModal
				</MDBBtn>
				<MDBModal isOpen={modal} toggle={toggle} centered>
					<MDBCardImage
						className="img-fluid mx-auto"
						cascade
						src={props.itemOne.productImage}
						top
						alt="sample photo"
					/>
					<MDBModalHeader className="mx-auto">
						{" "}
						{props.itemOne.productName}{" "}
					</MDBModalHeader>
					<MDBModalBody>{props.itemOne.productDescription}</MDBModalBody>
					<Reviews revs={revs} />
					<MDBModalFooter>
						<MDBBtn color="secondary" onClick={toggle}>
							Close
						</MDBBtn>
						{/* <MDBBtn color="primary">Save changes</MDBBtn> */}
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
		</Fragment>
	);
};

export default ShowItem;

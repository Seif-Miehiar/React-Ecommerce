import React, { useState } from "react";
import { MDBContainer, MDBRating } from "mdbreact";
import Reviews from "../reviews/reviews";

const RatingPage = () => {
	return (
		<MDBContainer>
			<MDBRating
				/*getValue={"hello"} submitHandler={"submit value"} */ feedback
			/>
		</MDBContainer>
	);
};

export default RatingPage;

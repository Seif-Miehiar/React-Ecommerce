import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
	return (
		<MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="6">
						<h5 className="title">Footer Content</h5>
						<p>
							Here you can use rows and columns here to organize your footer
							content.
						</p>
					</MDBCol>
					<MDBCol md="6">
						<h5 className="title">Contact us</h5>
						<ul>
							<li className="list-unstyled">
								<a href="#!">LinkedIn </a>
								<MDBIcon fab size="2x" icon="linkedin" />
							</li>
							<li className="list-unstyled">
								<a href="#!">GitHub </a>
								<MDBIcon fab size="2x" icon="github" />
							</li>
							<li className="list-unstyled">
								<a href="#!">Facebook </a>
								<MDBIcon fab size="2x" icon="facebook-square" />
							</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{" "}
					<a href="#!"> Seif Miehiar </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};

export default FooterPage;

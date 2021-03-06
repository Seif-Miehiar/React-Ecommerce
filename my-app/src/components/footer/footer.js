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
							<a className="li-ic mr-3" role="button">
								<i className="fab fa-lg fa-linkedin-in"></i>
							</a>
							<a className="git-ic mr-3" role="button">
								<i className="fab fa-lg fa-github"></i>
							</a>
							<a className="fb-ic mr-3" role="button">
								<i className="fab fa-lg fa-facebook-f"></i>
							</a>
							<a className="ins-ic mr-3" role="button">
								<i className="fab fa-lg fa-instagram"></i>
							</a>
							<a className="email-ic mr-3" role="button">
								<i className="far fa-lg fa-envelope"></i>
							</a>
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

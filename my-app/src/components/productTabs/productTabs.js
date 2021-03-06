import React from "react";

const ProductTabs = () => {
	return (
		<div>
			<ul
				className="nav nav-tabs md-tabs pt-3 d-flex justify-content-center"
				id="myTabEx"
				role="tablist"
			>
				<li className="nav-item">
					<a
						className="nav-link active show"
						id="home-tab-ex"
						data-toggle="tab"
						href="#home-ex"
						role="tab"
						aria-controls="home-ex"
						aria-selected="true"
					>
						Home
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="profile-tab-ex"
						data-toggle="tab"
						href="#profile-ex"
						role="tab"
						aria-controls="profile-ex"
						aria-selected="false"
					>
						Profile
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="contact-tab-ex"
						data-toggle="tab"
						href="#contact-ex"
						role="tab"
						aria-controls="contact-ex"
						aria-selected="false"
					>
						Contact
					</a>
				</li>
			</ul>
			<div className="tab-content pt-5" id="myTabContentEx">
				<div
					className="tab-pane fade active show"
					id="home-ex"
					role="tabpanel"
					aria-labelledby="home-tab-ex"
				>
					<p>
						Raw denim you probably haven't heard of them jean shorts Austin.
						Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
						cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
						butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
						qui irure terry richardson ex squid. Aliquip placeat salvia cillum
						iphone. Seitan aliquip quis cardigan american apparel, butcher
						voluptate nisi qui.
					</p>
				</div>
				<div
					className="tab-pane fade"
					id="profile-ex"
					role="tabpanel"
					aria-labelledby="profile-tab-ex"
				>
					<p>
						Food truck fixie locavore, accusamus mcsweeney's marfa nulla
						single-origin coffee squid. Exercitation +1 labore velit, blog
						sartorial PBR leggings next level wes anderson artisan four loko
						farm-to-table craft beer twee. Qui photo booth letterpress, commodo
						enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
						PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
						mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente
						labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
						sustainable jean shorts beard ut DIY ethical culpa terry richardson
						biodiesel. Art party scenester stumptown, tumblr butcher vero sint
						qui sapiente accusamus tattooed echo park.
					</p>
				</div>
				<div
					className="tab-pane fade"
					id="contact-ex"
					role="tabpanel"
					aria-labelledby="contact-tab-ex"
				>
					<p>
						Etsy mixtape wayfarers, ethical wes anderson tofu before they sold
						out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table
						readymade. Messenger bag gentrify pitchfork tattooed craft beer,
						iphone skateboard locavore carles etsy salvia banksy hoodie
						helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit
						cred pitchfork. Williamsburg banh mi whatever gluten-free, carles
						pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester
						cred you probably haven't heard of them, vinyl craft beer blog
						stumptown. Pitchfork sustainable tofu synth chambray yr.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductTabs;

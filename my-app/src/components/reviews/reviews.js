const Reviews = (props) => {
	console.log(props);
	if (!props || props.length === 0) {
		return "No reviews on this product";
	} else {
		return "hi";
		// return props.map((review, index) => {
		// 	return <li key={index}>review</li>;
		// });
	}
};

export default Reviews;

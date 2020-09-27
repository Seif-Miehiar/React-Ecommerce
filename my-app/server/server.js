const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const { dir } = require("console");

require("dotenv").config();

const app = express();

// Setup server port
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(helmet());
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(express.json());
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	console.log(path.join(__dirname, "../my-app/public/index.html"));
	res.sendFile(path.join(__dirname, "../public/index.html")) ||
		res.json({ message: "Welcome to React application." });
});

app.listen(PORT, () => {
	console.log(
		`App listening on ${PORT} number!\nOn this link http://localhost:${PORT}`
	);
});

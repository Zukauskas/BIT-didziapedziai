const express = require("express");
const app = express();
const port = 3003;

const menu = `
	<a href="/">Home</a>
	<a href="/racoon">Racoon</a>
	<a href="/fox">Fox</a>`;

//SSR
app.get("/", (req, res) => {
	res.send(`
	${menu}
	<h1>Hello Forest!</h1>
	`);
});

app.get("/racoon", (req, res) => {
	res.send(`
${menu}
<h1>Hello Racoon!</h1>`);
});
app.get("/fox", (req, res) => {
	res.send(`
${menu}
<h1>Hello Fox!</h1>`);
});


//API

app.get("/api", (req, res) => {
	res.json({title:'Hello Forest' })
});

app.get("/api/racoon", (req, res) => {
		res.json({title:'Hello Racoon' })
	});
app.get("/api/fox", (req, res) => {
	res.json({title:'Hello Fox' })
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

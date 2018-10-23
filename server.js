var app = require("./index");
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log(`Express Server is up on port ${PORT}`);
});

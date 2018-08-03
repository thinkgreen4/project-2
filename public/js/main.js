// ajax call to POST new_plant. send it so i can get it via req.body
$(document).ready(function() {
	var new_plant = {
		name: "Rose",
		description: "A very beautiful flower",
		instructions: "Water it, or else it will die"
	};
    
	$.post("/admin", new_plant, function(reply) {
		console.log(reply);
	});
});

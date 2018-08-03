// ajax call to POST new_plant. send it so i can get it via req.body

var new_plant = {
	name: $("#Name").val(),
	description: $("#Descripton").val(),
	instructions: $("#Descripton").val()
};

$.post("/admin", new_plant, function(reply) {
    console.log(reply);
})
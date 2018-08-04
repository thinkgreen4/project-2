// ajax call to POST new_plant. send it so i can get it via req.body
$(document).ready(function() {
	var new_plant = {
		name: "Rose",
		description: "A very beautiful flower",
		instructions: "Water it, or else it will die"
	};
    
	$("#plantBtn").on("click", function() {
		$.post("/admin/plant/create", new_plant, function(reply) {
			console.log(reply);
			location.reload();
		});
	});

	$(".hold_plants .deleteBtn").on("click", function() {
		var data_id = $(this).attr("data-id");
		var id = parseInt(data_id);

		$.delete("/admin/delete/" + id, function(data) {
			console.log(data);
			location.reload();
		})
	})

	$(".hold_plants .plant_click").on("click", function() {
		var data_id = $(this).attr("data-id");
		var id = parseInt(data_id);
		
		$.get("/admin/api/" + id, function(data) {
			console.log(data);
			var selected = `<h1>${data.name}</h1>
<p>${data.description}<p>`
		$(".selected").append(selected);
		})
	});
});

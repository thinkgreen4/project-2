// ajax call to POST new_plant. send it so i can get it via req.body
$(document).ready(function() {
	
	function deletePlant(id) {
		// Ajax call to delete plant with the id equal to the id passed 
		$.ajax({
			url: "/admin/delete/" + id,
			method: "DELETE",
		}).then(function() {
		// Reload the page
			location.reload();
		});
	};

	function editPlant(id) {
		//ajax call to edit plant in the data base
	}

	function findPlant(id) {
		// find the plant with the id equal to the id passed
		$.get("/admin/api/" + id, function(data) {
		// return plant object
			return data;
		});

	}

	function addPlant(plant) {
		// Create a Plant in the database
		$.post("/admin/plant/create", plant, function(reply) {
		// Reload Page
			location.reload();
		});
	}
	
	// This Button will be a Submit button
	$("#plantBtn").on("click", function() {
		// Create a plant object by grabbing the inputs of the admin.
		// The property values will need to be made by using jquery to grab the input values of the admin user
		var plant = {
			name: "Rose",
			description: "A very beautiful flower",
			instructions: "Water it, or else it will die"
		};
		
		// Add plant to the database
		addPlant(plant);
	});

	// When the Delete button is pressed
	$(".hold_plants .deleteBtn").on("click", function() {
		// Grab the plant's id
		var id = parseInt($(this).attr("data-id"));
		
		// Delete the Plant from the database
		deletePlant(id);
	})

	// When the Plant Button is Clicked
	$(".hold_plants .plant_click").on("click", function() {
		// Get the info of the plant from the data base
		var id = parseInt($(this).attr("data-id"));
		var plant = findPlant(id);
		
		console.log(plant);
		
		// Put the plant data into html code
		var selected = `<h1>${plant.name}</h1>
<p>${plant.description}<p>`

		// Display plant info on the webpage
		$(".selected").append(selected);
	});
});

$(document).ready(function() {
	$("#AddButton").click(addItem);
	$("#newItemBox").keydown(function(event) {
		var keycode = event.keyCode ? event.keyCode : event.which;
		if(keycode == 13){
			addItem();
		}
	});
	$("#list").on("click", "a", function() {
		var listItem = $(this).closest("li");
		var itemName = listItem.find("span").text();
		var message = "Are you sure you want to remove '" + itemName + "' from the list? You cannot undo this action.";
		if(window.confirm(message)) {
		listItem.remove();
		}
	});
	$("#list").on("change", "input:checkbox",function () {
		var item = $(this).closest("li").find("span");
		if($(this).is(":checked")) {
			item.addClass("completed");
		}
		else
			item.removeClass("completed"); 
	});
});

    function addItem() {
	   var newItem = $("#newItemBox").val();
	   if(newItem.length === 0) {
		alert("You must enter an item to be added.");
		if(window.confirm(alert)) {
			newItem.remove();
	}
	}

	var listItem = createListItem(newItem);
	$("#list").append(listItem);
	$("#newItemBox").val("");
}

function createListItem(newItem) {
	var listItem = "<li><input type='checkbox'>"; 
	listItem += "<span>" + newItem + "</span>";
	listItem += "<a href='#'>Remove</a></li>";
	return listItem; 
}
var curMembers = 1; // Global to keep track of members.
var WEB_SERVICE = 'LootGet.php';

// ==== Buttons and functionality ====

// When the page has finished loading, attach various event handlers.
$(document).observe('dom:loaded', function() {
	// Observe the 'submit' event on the form.
	$('lootForm').observe('submit', fetch);
});

function addMember() { // Adds a "character" line to the form. Yeah, I know that line is long, sorry.
	if (curMembers > 0 && curMembers < 12) { // Won't add more than 12 members (because c'mon, right?)
		curMembers = curMembers + 1;
		var fragment = create('<p> Race <select type="text" name="race' + curMembers 
			+ '" id="race' + curMembers 
			+ '"><option value="dragonborn">Dragonborn</option><option value="human">Human</option></select> Class <select type="text" name="class' + curMembers 
			+ '" id="class' + curMembers 
			+ '"><option value="jumper">Jumper</option><option value="tardbarian">Tardbarian</option></select>Preferred Weapon Type<select type="text" name="prefWep' + curMembers 
			+ '" id="prefWep ' + curMembers 
			+ '"><option value="lasers">Lasers</option><option value="axe">Axe</option></select> Preferred Armor Type <select type="text" name="prefArm' + curMembers 
			+ '" id="prefArm' + curMembers 
			+ '"><option value="fat">Fat</option><option value="cloth"> Cloth </option></select></p>');
		document.getElementById("chars").insertBefore(fragment, document.getElementById("more_less"));
	}
}

function removeMember() { // Removes a "character" line to the form. Won't remove the last one.
	if (curMembers > 1 && curMembers <= 12) {
		curMembers = curMembers - 1;
		document.getElementById("chars").removeChild(document.getElementById("more_less").previousSibling);
	} 
}

function resetForm() { // Resets the form.
	document.getElementById('results').innerHTML = "";
}

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('p');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

// ==== AJAX functions and data handling ====

/*function fetch() { // Submits the form to the PHP webservice.
	alert("fetch function called");
	// Get everything from the form.
	var input = ["data1"]; // HOW DO I DO THIS!?!??!?!??!?!?!
	// Send it to the web service.
	new Ajax.Request(WEB_SERVICE,
    {
		method: "post",
		parameters: {data: input},
		onSuccess: populate,
		onFailure: ajaxFailure,
		onException: ajaxException
    }
	);
}
*/

function fetch() {
	$('lootForm').request({
		onComplete: populate
	});
}


function populate(ajax) {
	var data = ajax.responseText;
	//alert(data);
	var output = create('<p>'+data+'</p>');
	document.getElementById("results").appendChild(output);
}

// ==== Failure and exception handling functions ====


// displays an error message if the server responds with anything other than 200 OK
function ajaxFailure(ajax) {
	alert("Server returned an HTTP error status code in response to an Ajax request!\n\n" +
	      "Status code: " + ajax.status + "\n" +
	      "Status text: " + ajax.statusText + "\n\n" +
	      "Content of response:\n\n" + ajax.responseText);
}

// ensures an error is shown if there is an exception
function ajaxException(ajax, exception) {
	if (debug) {
		alert("Exception in attempting to make Ajax request:\n\n" + exception);
	}
	throw exception;
}
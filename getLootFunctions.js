// When the page has finished loading, attach various event handlers.
window.onload = function () {
	// alert("js works");
}

function addMember() {
	var fragment = create('<p>Race <select><option value="party1">Dragonborn</option><option value="party2">Human</option><option value="party3">Elf</option><option value="party4">Shark</option><option value="party5">Balloon</option><option value="party6">Pokemon</option><option value="party7">Fuck</option><option value="party8">etc...</option></select>	Class <select><option value="party1">Jumper</option><option value="party2">Tardbarian</option><option value="party3">Peter</option><option value="party4">Is</option><option value="party5">A</option><option value="party6">Failure</option><option value="party7">LOL</option><option value="party8">etc...</option></select> Preferred Weapon Type <select><option value="party1">Lasers</option><option value="party2">Axe</option><option value="party3">Sword</option><option value="party4">Genitalia</option><option value="party5">Butts</option><option value="party6">Flail</option><option value="party7">Hammer</option><option value="party8">etc...</option></select> Preferred Armor Type <select><option value="party1">Fat</option><option value="party2">Cloth</option><option value="party3">Leather</option><option value="party4">Hide</option><option value="party5">Scale</option<option value="party6">Plate</option><option value="party7">Chainmail</option><option value="party8">etc...</option></p>');
	document.getElementById("chars").insertBefore(fragment, document.getElementById("more_less"));
}

function removeMember() {
	document.getElementById("chars").removeChild(document.getElementById("more_less").previousSibling);
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
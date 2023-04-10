$(document).ready(function() { //ready function ensures the function only runs when the DOM is fully loaded
    $("h2").addClass("underline"); //underlines all <h2> elements 
    $("ul").addClass("border"); // adds a border to all the lists 
})

$("tr:odd").addClass("odd") //adds off red shade to 1,3,5 etc elements of tr (table row)
$("tr:even").addClass("even") //adds  red shade to 0,2,4 etc elements of tr (table row)
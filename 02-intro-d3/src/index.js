import {select} from "d3-selection";
// Déplacer de 50px vers la droite le premier et le deuxième cercle
select("#cercle1")
    .attr("cx", "100")
// Changer la couleur du deuxième cercle
select("#cercle2")
    .attr("fill", "red")
select("#cercle")
// Rajouter du texte en dessous de chaque cercle
select("#element1")
    .append("text")
    .attr("x", "70")
    .attr("y", "110")
    .text("Du texte")
select("#element2")
    .append("text")
    .attr("x", "120")
    .attr("y", "210")
    .text("Du texte")
select("#element3")
    .append("text")
    .attr("x", "230")
    .attr("y", "310")
    .text("Du texte")
// Alignez verticalement les cercles en cliquant sur le dernier cercle
select("#cercle3")
    .on('click', function() {
        select(this).attr("cx", "40")
        select("#cercle2").attr("cx", "40")
        select("#cercle1").attr("cx", "40")
    })
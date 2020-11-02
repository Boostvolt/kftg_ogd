/*
----------------------------------------------------------------------------------------
kftg_ogd (https://github.com/Boostvolt/kftg_ogd)

Date           Who           What
11.05.2020     Ivan & Jan    created

(c) by Ivan & Jan
    ----------------------------------------------------------------------------------------
*/

function sliderChange() {
    let sliderValue = document.getElementById('years').value;
    document.getElementById('rangeyear').innerHTML = "Jahr: " + sliderValue;
}
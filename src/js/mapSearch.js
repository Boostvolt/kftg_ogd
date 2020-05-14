/*
----------------------------------------------------------------------------------------
kftg_ogd (https://github.com/Boostvolt/kftg_ogd)

Date           Who           What
11.05.2020     Ivan & Jan    created

(c) by Ivan & Jan
    ----------------------------------------------------------------------------------------
*/

var index = 0;
var gemeindeName = "";
var selectedYear = 0;
var year = 0;

document.getElementById('years').disabled = true;

function getData(arrayIndex) {
    index = arrayIndex;
    gemeindeName = muniArr[index][1];
    getSelectedYear();
}

function getSelectedYear() {
    selectedYear = document.getElementById('years').value;
    console.log(selectedYear);

    year = selectedYear;
    getIndexNumber();
}

function getIndexNumber() {
    for (let i = 0; i < arrayG.length; i++) {
        if (arrayG[i][4] == year && arrayG[i][1] === gemeindeName) {
            index = i;
            break;
        }
    }
    displayData();
}

function displayData() {

    drawChart(gemeindeName, index);
    document.getElementById("gemeinde").innerHTML = "Gemeinde: " + arrayG[index][1];

    document.getElementById("maennlich").innerHTML = "Männlich: " + arrayG[index][10];
    document.getElementById("weichblich").innerHTML = "Weiblich: " + arrayG[index][11];

    document.getElementById("schweizer").innerHTML = "Schweizer: " + arrayG[index][12];
    document.getElementById("auslaender").innerHTML = "Ausländer: " + arrayG[index][13];
}




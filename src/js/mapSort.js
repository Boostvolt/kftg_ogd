/*
----------------------------------------------------------------------------------------
kftg_ogd (https://github.com/Boostvolt/kftg_ogd)

Date           Who           What
11.05.2020     Ivan & Jan    created

(c) by Ivan & Jan
    ----------------------------------------------------------------------------------------
*/

var arrayG = [];

function csvToArray(csv) {
    let rows = csv.split("\n");

    return rows.map(function (row) {
        return row.split(";");
    });
}

var imp = "";

httpobj = new XMLHttpRequest();
httpobj.open('get', 'csv/bevGemeinde.csv', true);
httpobj.send(null);
httpobj.onreadystatechange = function () {
    if (httpobj.readyState == 4 && httpobj.status == 200) {
        imp = httpobj.responseText;
        arrayG = csvToArray(imp);

        document.getElementById("year").defaultValue = NaN;

        for (let i = 0; i < arrayG.length - 1; i++) {
            arrayG[i][1] = arrayG[i][1].replace('"', '');
            arrayG[i][1] = arrayG[i][1].replace('""', '');
            arrayG[i][1] = arrayG[i][1].replace('"""', '');
            arrayG[i][1] = arrayG[i][1].replace('"")"', ')');
        }
    }
};

function sliderChange(index){
    let sliderValue = document.getElementById('years').value;
    document.getElementById('rangeyear').innerHTML = "Jahr: " + sliderValue;
}




/*
----------------------------------------------------------------------------------------
kftg_ogd (https://github.com/Boostvolt/kftg_ogd)

Date           Who           What
11.05.2020     Ivan & Jan    created

(c) by Ivan & Jan
    ----------------------------------------------------------------------------------------
*/

let arrayG = [];

function csvToArray(csv) {
    let rows = csv.split("\n");

    return rows.map(function (row) {
        return row.split(";");
    });
}

let imp = "";

httpobj = new XMLHttpRequest();
httpobj.open('get', 'csv/bevGemeinde.csv', true);
httpobj.send(null);
httpobj.onreadystatechange = function () {
    if (httpobj.readyState === 4 && httpobj.status === 200) {
        imp = httpobj.responseText;
        arrayG = csvToArray(imp);
    }
};
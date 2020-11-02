/*
----------------------------------------------------------------------------------------
kftg_ogd (https://github.com/Boostvolt/kftg_ogd)

Date           Who           What
11.05.2020     Ivan & Jan    created

(c) by Ivan & Jan
    ----------------------------------------------------------------------------------------
*/
function drawChart(gemeinde, i) {
    let geschlecht = document.getElementById('geschlecht').getContext('2d');

    new Chart(geschlecht, {
        type: 'doughnut',

        data: {
            labels: ["Männlich", "Weiblich"],
            datasets: [{
                backgroundColor: ['rgb(2, 163, 254)', 'rgb(236, 73, 166)'],
                borderColor: 'rgb(255, 255, 255)',
                data: [arrayG[i][10], arrayG[i][11]],
            }]
        },

        options: {
            hover: {mode: null}
        }
    });

    let nationalitaet = document.getElementById('nationalitaet').getContext('2d');

    new Chart(nationalitaet, {
        type: 'doughnut',

        data: {
            labels: ["Schweizer", "Ausländer"],
            datasets: [{
                backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 0, 0)'],
                borderColor: 'rgb(255, 255, 255)',
                data: [arrayG[i][12], arrayG[i][13]],
            }]
        },

        options: {
            hover: {mode: null}
        }
    });
}
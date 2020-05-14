function init() {
    $('#graph').empty();
    var docu = document.getElementById('graph');

    var width = docu.clientWidth,
        height = docu.clientHeight,
        centered,
        update = false,
        clickBool = false;

    var path = d3.geo.path()
        .projection(null);

    var svg = d3.select("#graph").append("svg")
        .attr("width", width)
        .attr("height", height);

    var graph = d3.select("#graph").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    svg.append("rect")
        .attr("class", "background")
        .attr("width", width)
        .attr("height", height)
        .on("click", clicked);


    var g = svg.append("g")
        .attr("width", "")
        .attr("height", "");

    d3.json("map/json/tg-municipalities-lakes.json", function (error, tg) {
        g.append("g")
            .attr("id", "municipalities")
            .selectAll("path")
            .data(topojson.feature(tg, tg.objects.municipalities).features)
            .enter().append("path")
            .attr("d", path)
            .on("click", clicked)
            .on("mouseover", mouseover)
            .on("mouseout", mouseout)
            .attr("fill", function (d) {

                var gemeindeName = "";

                for (let j = 0; j < muniArr.length; j++) {
                    if (d.id === muniArr[j][0]) {
                        gemeindeName = muniArr[j][1];
                        break;
                    }
                }

                    for (let i = 0; i < arrayG.length; i++) {
                        if (arrayG[i][1] === gemeindeName) {
                            var colorChooser = arrayG[i][13] - arrayG[i][14];

                            if (colorChooser < 0) {
                                return color[1];
                            } else if (colorChooser === 0) {
                                return color[3];
                            } else {
                                return color[0];

                        }
                    }
                }
            });


        g.append("g")
            .attr("id", "lakes")
            .selectAll("path")
            .data(topojson.feature(tg, tg.objects.lakes).features)
            .enter().append("path")
            .attr("d", path);

        g.append("path")
            .datum(topojson.mesh(tg, tg.objects.municipalities, function (a, b) {
                return a !== b;
            }))
            .attr("id", "border")
            .style("stroke-width", "1px")
            .attr("d", path);
    });

    function clicked(d) {
        var x, y, k;
        if (d && centered !== d) {
            var centroid = path.centroid(d);
            x = centroid[0];
            y = centroid[1];
            k = 4;
            centered = d;

            clickBool = true;
            sendData(centered);
        } else {
            x = width / 2;
            y = height / 2;
            k = 1;
            centered = null;

            update = false;
            clickBool = false;
        }
        g.selectAll("path")
            .classed("active", centered && function (d) {
                return d === centered;
            });
        g.transition()
            .duration(750)
            .style("stroke-width", 1.5 / k + "px");

    }

    function mouseover(d) {
        graph.style("opacity", .9)
            .html(getMName(d))
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");

    }

    function mouseout(d) {
        graph.style("opacity", 0)
            .html();
    }

    function sendData(d) {
        for (i = 0; i < muniArr.length; i++) {
            if (d.id === muniArr[i][0]) {
                console.log(muniArr[i][1]);
                getData(i);
            }
        }
    }

    function getMName(d) {
        for (i = 0; i < muniArr.length; i++) {
            if (d.id === muniArr[i][0]) {
                return muniArr[i][1] || d.id;

            }
        }
    }
}

function drawChart(gemeinde, i) {
    var ctx = document.getElementById('geschlecht').getContext('2d');

    var chart = new Chart(ctx, {
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

    var ctx = document.getElementById('nationalitaet').getContext('2d');

    var chart = new Chart(ctx, {
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


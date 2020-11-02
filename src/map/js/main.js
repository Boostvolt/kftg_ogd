/*
----------------------------------------------------------------------------------------
kftg_ogd (https://github.com/Boostvolt/kftg_ogd)

Date           Who           What
11.05.2020     Ivan & Jan    created

(c) by Ivan & Jan
    ----------------------------------------------------------------------------------------
*/

function init() {
    $('#graph').empty();
    let docu = document.getElementById('graph');

    let width = docu.clientWidth,
        height = docu.clientHeight,
        centered,
        update = false,
        clickBool = false;

    let path = d3.geo.path()
        .projection(null);

    let svg = d3.select("#graph").append("svg")
        .attr("width", width)
        .attr("height", height);

    let graph = d3.select("#graph").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    svg.append("rect")
        .attr("class", "background")
        .attr("width", width)
        .attr("height", height)
        .on("click", clicked);

    let g = svg.append("g")
        .attr("width", "")
        .attr("height", "");

    d3.json("map/json/municipalities.json", function (error, tg) {
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

                let gemeindeName = "";

                for (let j = 0; j < muniArr.length; j++) {
                    if (d.id === muniArr[j][0]) {
                        gemeindeName = muniArr[j][1];
                        break;
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
        let k;
        if (d && centered !== d) {
            k = 4;
            centered = d;

            clickBool = true;
            sendData(centered);
        } else {
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
        window.scrollTo(0, 1520);
        document.getElementById('years').disabled = false;
    }

    function mouseover(d) {
        graph.style("opacity", .9)
            .html(getMName(d))
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    }

    function mouseout() {
        graph.style("opacity", 0)
            .html();
    }

    function sendData(d) {
        for (let i = 0; i < muniArr.length; i++) {
            if (d.id === muniArr[i][0]) {
                console.log(d.id);
                console.log(muniArr[i][1]);
                getData(i);
            }
        }
    }

    function getMName(d) {
        for (let i = 0; i < muniArr.length; i++) {
            if (d.id === muniArr[i][0]) {
                return muniArr[i][1] || d.id;
            }
        }
    }
}
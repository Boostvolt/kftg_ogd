var muniArr = [
    [4436, "Romanshorn"],
    [4451, "Uttwil"],
    [4426, "Kesswil"],
    [4441, "Salmsach"],
    [4411, "Egnach"],
    [4401, "Arbon"],
    [4421, "Horn"],
    [4431, "Roggwil"],
    [4461, "Amriswil"],
    [4406, "Dozwil"],
    [4416, "Hefenhofen"],
    [4446, "Sommeri"],

    [4656, "Güttingen"],
    [4641, "Altnau"],
    [4691, "Münsterlingen"],
    [4643, "Bottighofen"],
    [4671, "Kreuzlingen"],
    [4681, "Langrickenbach"],
    [4683, "Lengwil"],
    [4666, "Kemmental"],
    [4696, "Tägerwilen"],
    [4651, "Gottlieben"],
    [4646, "Ermatingen"],
    [4851, "Salenstein"],
    [4846, "Raperswilen"],
    [4701, "Wäldi"],

    [4486, "Hauptwil-Gottshaus"],
    [4511, "Zihlschlacht-Sitterdorf"],
    [4471, "Bischofszell"],
    [4495, "Hohentannen"],
    [4476, "Erlen"],
    [4501, "Kradolf-Schönenberg"],
    [4506, "Sulgen"],
    [4911, "Bürglen"],
    [4901, "Birwinken"],
    [4891, "Berg"],
    [4791, "Wuppenau"],
    [4756, "Schönholzerswilen"],
    [4921, "Bussnang"],
    [4946, "Weinfelden"],
    [4941, "Märstetten"],
    [4711, "Affeltrangen"],
    [4881, "Amlikon-Bissegg"],
    [4951, "Wigoltingen"],

    [4606, "Stettfurt"],
    [4591, "Matzingen"],
    [4611, "Thundorf"],
    [4566, "Frauenfeld"],
    [4571, "Gachnang"],
    [4590, "Hüttlingen"],
    [4561, "Felben-Wellhausen"],
    [4831, "Müllheim"],
    [4841, "Pfyn"],
    [4621, "Warth-Weiningen"],
    [4616, "Uesslingen-Buch"],
    [4601, "Neunforn"],
    [4816, "Homburg"],
    [4811, "Herdern"],
    [4821, "Hüttwilen"],
    [4801, "Berlingen"],
    [4864, "Steckborn"],
    [4826, "Mammern"],
    [4806, "Eschenz"],
    [4871, "Wagenhausen"],
    [4545, "Diessenhofen"],
    [4536, "Basadingen-Schlattingen"],
    [4546, "Schlatt"],

    [4726, "Fischingen"],
    [4751, "Rickenbach"],
    [4786, "Wilen"],
    [4761, "Sirnach"],
    [4724, "Eschlikon"],
    [4721, "Bichelsee-Balterswil"],
    [4746, "Münchwilen"],
    [4781, "Wängi"],
    [4551, "Aadorf"],
    [4723, "Braunau"],
    [4776, "Tobel-Tägerschen"],
    [4716, "Bettwiesen"],
    [4741, "Lommis"]
];

var btnP = null;

var max = 0;
for (i = 0; i < muniArr.length; i++) {
    if (max < muniArr[i][2]) {
        max = muniArr[i][2];
    }
}

init();

$("button").click(function () {
    switch (this.id) {
        case "btn1":
            $('#graph').empty();
            btnP = this.id;
            init();
            break;
        case "btn2":
            $('#graph').empty();
            btnP = this.id;
            init();
            break;
        case "btn3":
            $('#graph').empty();
            btnP = this.id;
            init();
            break;
        case "btn4":
            $('#graph').empty();
            btnP = this.id;
            init();
            break;
        case "btn5":
            $('#graph').empty();
            btnP = this.id;
            init();
            break;
        default:
            $('#graph').empty();
            btnP = null;
            init();
            break;
    }
});

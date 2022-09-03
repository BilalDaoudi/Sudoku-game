// Verefier est ce que gagné
function Win_Virefier(nb) {
    if (nb == 0) {
        Arreter_Time()
        let h = document.getElementById("H").textContent;
        let m = document.getElementById("M").textContent;
        let s = document.getElementById("S").textContent;
        Bloquer()
        alert("You win" + h + ':' + m + ':' + s);

    }
}


// Fonction Pour Arrêter le temps
function Arreter_Time() {
    clearInterval(1);
}

// Fonction Pour le temps
function Time() {
    let tournS = 0
    let tournM = 0
    let nb = document.getElementById("S").textContent;
    if (nb < 9) {
        let test = parseInt(nb) + 1;
        let u = "0" + test;
        document.getElementById("S").textContent = u;
    }
    if (nb >= 9 && nb < 59)
        document.getElementById("S").textContent = parseInt(nb) + 1;
    if (nb == 59) {
        document.getElementById("S").textContent = "00";
        tournS++
    }
    if (tournS == 1) {
        tournS = 0;
        let nb = document.getElementById("M").textContent;
        if (nb < 9) {
            let test = parseInt(nb) + 1;
            let u = "0" + test;
            document.getElementById("M").textContent = u;
        }
        if (nb >= 9 && nb < 59)
            document.getElementById("M").textContent = parseInt(nb) + 1;
        if (nb == 59) {
            document.getElementById("M").textContent = "00";
            tournM++
        }
    }
    if (tournM == 1) {
        tournM = 0
        let h = document.getElementById("H").textContent;
        if (h < 9) {
            let test = parseInt(h) + 1;
            let u = "0" + test;
            document.getElementById("H").textContent = u;
        }
        else
            document.getElementById("H").textContent = parseInt(h) + 1;
    }
}

// Creation la forme de Sudoku ------------------------------------
function Creation_Form() {
    var row = 0;
    var tourn = 0;
    let form = document.createElement('form');
    form.setAttribute('id', 'form')
    form.setAttribute('onclick', 'getindice()');
    var table = document.createElement('table');
    table.setAttribute('id', 'tab')
    form.appendChild(table)
    for (let i = 0; i < 9; i++) {
        let tr = document.createElement('tr');
        for (let i = 0; i < 9; i++) {
            var td = document.createElement('td');
            let inp1 = document.createElement('input');
            inp1.setAttribute('type', 'number');
            inp1.setAttribute('readOnly', 'true');
            inp1.setAttribute('onkeyup', "if(value>=10) value='';if(value<=0 ) value='';")
            td.appendChild(inp1)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    document.body.appendChild(form)
}

// Appel Fonction Creation
document.body.onload = Creation_Form();


// Exemple de Sudoku facile ----------------
var TF1 = [[, 6, 2, 8, 5, , 4, , 3],
[5, , 4, 1, , 9, 6, 7,],
[7, 8, , , 4, 3, , 2, 1],
[4, 7, , , 1, 2, , 8, 6],
[9, , 3, 5, , 6, 7, 4,],
[, 2, 8, 7, 9, , 1, 3, 5],
[, 5, 6, 4, 7, 8, 2, , 9],
[2, , 1, 9, 3, 5, 8, 6,],
[8, 9, , 2, 6, 1, , 5, 4]
];
var TF2 = [[8, 1, 2, 9, , , , ,],
[, , , 8, 5, 1, 6, , 3],
[3, 6, , 7, , 4, 9, , 8],
[5, 8, 4, 1, 6, 9, 7, ,],
[, 3, 7, 2, , 5, , 4, 9],
[2, , 1, 4, 7, 3, 5, 8, 6],
[9, , , , 1, 8, , 5,],
[1, 2, , 5, 9, 7, 3, 6,],
[, , , 6, 4, , , , 1]
];

// Exemple de Sudoku moyenne ----------------
var TM1 = [[, 4, , , 5, , 2, 3, 7],
[3, 2, 5, , 8, 7, , 6,],
[7, , 1, , 3, 2, , , 5],
[, 3, , 7, , , 9, , 1],
[, 1, , 2, 6, 9, , , 8],
[, 5, , 8, , , 4, , 6],
[2, 8, 6, 3, , , , 4,],
[5, , , 6, , 8, 7, , 3],
[1, 7, , 5, , 4, , , 2]
];
var TM2 = [[, 9, 7, , , , , ,],
[, , , , , , 9, 3, 6],
[3, , 6, 1, 9, 8, 4, 7, 5],
[2, 4, 8, 6, 5, , , 9, 7],
[, , 1, , , , 5, , 2],
[, , , , , , , ,],
[8, 5, 3, 2, , , , 1, 4],
[6, , 9, , 7, , , ,],
[, , , 5, 3, 1, 6, 8, 9]
];

// Exemple de Sudoku Difficile ----------------
var TD1 = [[, , , , , , 2, 4, 6],
[, 2, 9, , 7, 4, , , 3],
[1, 3, , 8, 2, , 9, 7,],
[7, , , , , 1, , 2,],
[8, , , , , 9, 5, 6,],
[9, 6, , 4, , 2, , ,],
[3, 9, 7, 2, 6, 8, 1, , 4],
[, , 5, 3, 4, , 6, ,],
[, , , , 1, , , ,]
]
var TD2 = [[, 7, , , , , , , 4],
[9, , 2, 1, , , , ,],
[, 5, 8, 7, 2, 4, , 6,],
[5, , 3, 9, 4, , , , 2],
[, 1, , 6, , , , , 5],
[7, , , , , , , 9, 8],
[, 9, 1, , 6, , , 8, 7],
[4, 3, , , 8, 9, , 5, 6],
[, , 5, 3, 1, 7, 2, ,]
];

// Tableau contient Tout Les tableux 
var T_Facile = [TF1, TF2];
var T_Moyenne = [TM1, TM2];
var T_Difficile = [TD1, TD2];


// Fonction retourn un nombre Aléatoire entre min et max------
function Random_Between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//Fonction Romplir avec tableau
var nb_vide = 0;
function Remplir(Tab) {
    let indice = Random_Between(0, 1);
    let exemple = Tab[indice];
    for (let t = 0; t < tr.length; t++) {
        for (let h = 0; h < tr[t].cells.length; h++) {
            tr[t].cells[h].children[0].value = exemple[t][h]
            if (tr[t].cells[h].children[0].value == '') {
                nb_vide++;
                tr[t].cells[h].children[0].readOnly = false;
            }
        }
    }
}


let t = document.getElementById('form');
var tabl = document.getElementById('tab');
var tr = tabl.rows;

// Remplir la forme de sudoku avec un tableau Aléatoire
function Start(btn) {
    if (document.getElementById("select").value == "facile") {
        Remplir(T_Facile);
    }
    if (document.getElementById("select").value == "moyenne") {
        Remplir(T_Moyenne);
    }
    if (document.getElementById("select").value == "difficile") {
        Remplir(T_Difficile);
    }
    if (document.getElementById("select").value != "choisir") {
        btn.disabled = true;
        document.getElementById("select").disabled = true;
        start = setInterval(Time, 1000);
    }
}

// Fonction Pour Bloquer la saisir;
function Bloquer() {
    for (let t = 0; t < tr.length; t++) {
        for (let h = 0; h < tr[t].cells.length; h++) {
            tr[t].cells[h].children[0].disabled = true;
        }
    }
}

// Fonction de Récuperer l'indice  
function getindice() {
    for (let i = 0; i < tr.length; i++) {
        for (let j = 0; j < tr[i].cells.length; j++) {
            tr[i].cells[j].onkeyup = function () {
                let c = Cells(i, j);
                let rw = Row(i, j);
                let r = Regions(i, j);
                if (r == 1 || c == 1 || rw == 1) {
                    let chance = document.getElementById("chance").textContent;
                    if (chance == '♥♥♥♥♥')
                        document.getElementById("chance").textContent = '♥♥♥♥';
                    if (chance == '♥♥♥♥')
                        document.getElementById("chance").textContent = '♥♥♥';
                    if (chance == '♥♥♥')
                        document.getElementById("chance").textContent = '♥♥';
                    if (chance == '♥♥')
                        document.getElementById("chance").textContent = '♥';
                    if (chance == '♥') {
                        document.getElementById("chance").textContent = '';
                        document.getElementById("rejouer").style.background = "red";
                        Arreter_Time();
                        Bloquer();
                        alert("Tu perdu bonne chance dont autre chance");
                    }
                }
                else {
                    if (tr[i].cells[j].children[0].value != "") {
                        nb_vide--;
                        Win_Virefier(nb_vide);
                    }
                }
            }
        }
    }
}


// Fonction pour tester la ligne
function Cells(i, j) {
    let ver = 0;
    var xx;
    var yy;
    let valeur = tr[i].cells[j].children[0].value;
    if (valeur != "") {
        for (let k = 0; k < 9; k++) {
            if (valeur == tr[i].cells[k].children[0].value)
                ver++;
            if (ver == 1) {
                xx = i;
                yy = k;
                ver++;
            }
            if (ver == 3) {
                tr[xx].cells[yy].children[0].style.color = 'gold';
                tr[i].cells[k].children[0].style.color = 'gold';
                tr[i].cells[j].children[0].style.fontSize = '50px';
                var inter = setInterval(
                    function () {
                        tr[i].cells[j].children[0].style.fontSize = 'x-large';
                        tr[i].cells[j].children[0].value = "";
                        tr[xx].cells[yy].children[0].style.color = ''
                        tr[i].cells[k].children[0].style.color = '';
                        clearInterval(inter)
                    }, 500)
                return 1;
            }
        }
    }
}


// Fonction pour tester la collone
function Row(i, j) {
    let ver1 = 0;
    var d; var w;
    let test = tr[i].cells[j].children[0];
    let valeur = tr[i].cells[j].children[0].value;
    if (valeur != "") {
        for (let h = 0; h < 9; h++) {
            if (valeur == tr[h].cells[j].children[0].value)
                ver1++;
            if (ver1 == 1) {
                d = h;
                w = j;
                ver1++;
            }
            if (ver1 == 3) {
                tr[d].cells[j].children[0].style.color = 'gold';
                tr[h].cells[j].children[0].style.color = 'gold';
                tr[i].cells[j].children[0].style.fontSize = '50px';
                var inter = setInterval(
                    function () {
                        tr[i].cells[j].children[0].style.fontSize = 'x-large';
                        tr[i].cells[j].children[0].style.color = '';
                        tr[i].cells[j].children[0].value = "";
                        tr[h].cells[j].children[0].style.color = '';
                        tr[d].cells[j].children[0].style.color = '';
                        clearInterval(inter)
                    }, 500)
                return 1;
            }
        }
    }
}

function Region(test, x, y) {
    let valeur = test.value;
    let tabl = document.getElementById('tab');
    let tr = tabl.rows;
    let ver2 = 1;
    for (let a = x; a < x + 3; a++) {
        for (let b = y; b < y + 3; b++) {
            if (test != tr[a].cells[b].children[0]) {
                if (valeur == tr[a].cells[b].children[0].value) {
                    ver2++
                    if (ver2 == 2) {
                        tr[a].cells[b].children[0].style.color = 'gold'
                        test.style.color = 'gold'
                        test.style.fontSize = '50px';
                        var inter = setInterval(function () {
                            test.style.fontSize = 'x-large';
                            test.style.color = '';
                            test.value = ""
                            tr[a].cells[b].children[0].style.color = ''
                            clearInterval(inter)
                        }, 500)
                        return 1
                    }
                }
            }
        }
    }
}

// Fonction pour tester le Carré
function Regions(i, j) {
    let test = tr[i].cells[j].children[0];
    let valeur = tr[i].cells[j].children[0].value
    if (valeur != "") {
        // region 1 ------------------------------------------
        if ((j <= 2 && i <= 2))
            return Region(test, 0, 0);
        // region 2 ------------------------------------------
        if ((j >= 3 && j < 6) && i <= 2)
            return Region(test, 0, 3)
        // region 3 ------------------------------------------
        if (((j > 5 && j <= 8) && i <= 2))
            return Region(test, 0, 6)

        // region 4 ------------------------------------------
        if ((j <= 2 && (i > 2 && i <= 5)))
            return Region(test, 3, 0)
        // region 5 ------------------------------------------
        if (((j > 2 && j <= 5) && (i > 2 && i <= 5)))
            return Region(test, 3, 3)
        // region 6 ------------------------------------------
        if (((j > 5 && j <= 8) && (i > 2 && i <= 5)))
            return Region(test, 3, 6)

        // region 7 ------------------------------------------
        if ((j <= 2 && (i > 5 && i <= 8)))
            return Region(test, 6, 0)
        // region 8 ------------------------------------------
        if (((j > 2 && j <= 5) && (i > 5 && i <= 8)))
            return Region(test, 6, 3)
        // region 9 ------------------------------------------
        if (((j > 5 && j <= 8) && (i > 5 && i <= 8)))
            return Region(test, 6, 6)
    }
}
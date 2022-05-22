function Break(a) {
    br = document.createElement("span");
    br.innerHTML = "<br/>";
    document.getElementById(a).appendChild(br);
}

const form = {
    nuofquestions: 0,
    nuofpage: 0,
    questionperpage: [],



}

var el = [["id","class"],
          ["id","class","for"],
          ["id","class","name","type"],
          ["id","class","name","type","onblur"],
          ["id","style"],
          ["type", "id", "onclick"]
        ]; /* elemet names */
var na = [[]]; /* id names */
var ni = [];
var ni1 = []
var na1 = ["noq", "p", "i","set","label","in"];
var aa = 0;

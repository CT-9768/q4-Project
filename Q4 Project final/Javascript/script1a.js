document.getElementById("btn1").addEventListener("click",function (event) {
    event.preventDefault();
})

function createelement(a = "" /*element */,x = [],y = [], d = "" /*parent element*/ ) {
    var placeholder;
    const div = document.createElement(a);
    for (let i = 0; i < x.length; i++){
        div.setAttribute(x[i],y[i])
    }

    if (d === undefined) {
        document.body.appendChild(div)
    } else {
        document.getElementById(d).appendChild(div);
    }
}
function a() {
    var a1 = [[]];
    
    
    var a = document.getElementById("nu").value;
    var b = document.getElementById("page").value;
    if(aa == 0) {
        afunction(b);
        questions();
        aa = aa + 1
    } else if (aa > 0) {
        clean1();
        afunction(b);
        questions();

    }

    
    
}

function afunction(x) {
    // question per pages function
    var placer = "Page "
    na[1] = new Array;
    na[2] = new Array;
    na[3] = new Array;
    var place = ["la","class"]
    createelement("legend",el[0],place,"small");
    document.getElementById("la").innerHTML ="Questions per page";
    for (let i = 0; i < x; i++) {
        na[0][i] = na1[0].concat(i.toString());
        ni[0] = na[0][i];

        //console.log(na[0]);
        
        na[1][i] = "class";
        ni[1] = na[1][i];

        //console.log(na[1]);

        na[1][i] = na1[1].concat(i.toString());
        ni[2] = na[1][i];
        createelement("label",el[1],ni,"small");
        document.getElementById(na[0][i]).innerHTML = placer.concat((i+1).toString());
        Break("small");

        //console.log(ni);

        ni[3] = "number";
        ni[4] = "che()";
        na[3][i] = na1[2].concat(i.toString());
        ni[0] = na[3][i];
        createelement("input",el[3],ni,"small");
        Break("small");
        
    }
}

function che() {
    var a = document.getElementById("nu").value;
    var b = document.getElementById("page").value;
    console.log(document.getElementById("i0").value);
    var p,c,d;
    var arr = [];
    for (let x = 0; x<b;x++) {
        p = na1[2].concat(x.toString());
        c = document.getElementById(p).value;
        console.log(c);
        arr[x] = getNum(parseInt(c));
        document.getElementById(p).setAttribute("min","1");
        document.getElementById(p).setAttribute("max",b.toString());
    }
    console.log(arr);

    for(let i = 0; i < b; i++){
        if(arr[i] != 0) {
            var d = arr.reduce(add,0);
            console.log(d);
            for(let j = 0;j < b;j++) {
                document.getElementById(na1[2].concat(j.toString())).setAttribute("max",(b-d).toString());
                if ((b-d) <= 0) {
                    document.getElementById(na1[2].concat(j.toString())).value = 0;
                }
            }
        }
    }
}

function clean1() {
    let x2 = document.getElementById("small");
    let z = document.getElementById("big");
    x2.remove();
    z.remove()
    let x = document.getElementById("smolbig");
    let y = document.getElementById("bigger");
    
    let x1 = document.getElementById("form");
    x.remove();
    y.remove();
    x1.appendChild(x);
    x1.appendChild(y);
    //z.appendChild(y);

    let x3 = document.createElement("div");
    x3.setAttribute("id","small")
    x.appendChild(x3);

    let z2 = document.createElement("div");
    z2.setAttribute("id","big");
    y.appendChild(z2);


    na = [[0]];
    ni = [0];
    var ni = [0];
    var ni1 = [0];

    
}


function getNum(val) {
    if (isNaN(val)) {
      return 0;
    }
    return val;
 }

function add(accumulator, a) {
    return accumulator + a;
}

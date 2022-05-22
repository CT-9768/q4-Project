function questions() {
    console.log("question function works");
    var a = document.getElementById("nu").value;
    na[4] = new Array;
    var p = "Question ";


    for (let x = 0; x < a; x++) {
        ni[0] = na1[3].concat(x.toString());
        ni[1] = "tab";
        na[4][x] = ni[0];
        createelement("div",el[0],ni,"big");
        document.getElementById(ni[0]).innerHTML = p.concat((x+1).toString());
        c(ni[0],x);
    }


    var king = ["buttonformcheck","overflow:auto;"];
    var king1 = ["previous_next","float:right;"];
    var prev= ["button","prevBtn","nextPrev(-1)"];
    var next= ["button","nextBtn","nextPrev(1)"];
    createelement("div",el[0],king,"big");
    createelement("div",el[4],king,"buttonformcheck");
    createelement("button",el[5],prev,"big");
    document.getElementById("prevBtn").innerHTML = "Previous";
    createelement("button",el[5],next,"big");
    document.getElementById("nextBtn").innerHTML = "Next";

    var steps = ["totalsteps","text-align:center;margin-top:40px;"];
    createelement("div",el[4],steps,"big");

    var long = "steps";
    var steps1 = [];
    steps1[0] = long.concat();
    steps1[1] = "steps";
    for (let i = 0; i < a;i++) {
        steps1[0] = long.concat(i.toString());
        createelement("span",el[0],steps,"totalsteps");
    };
}

function c(a,x1) {
    var nax = [];
    var jax = [];    
    var x2 = 0;
    nax[0] = x1.toString();
    nax[1] = x2.toString();
    ni1[0] = na1[4].concat(nax.join("_"));
    ni1[1] = "class";
    ni1[2] = na1[5].concat(nax.join("_"));
    Break(a);
    createelement("label",el[1],ni1,a);

    Break(a);
    document.getElementById(ni1[0]).innerHTML = "what is the question?";
    
    jax[0] = ni1[2];
    jax[1] = "class";
    jax[2] = jax[0];
    jax[3] = "text";  
    createelement("input",el[3],jax,a);
    Break(a);
}

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x =[] 
  x = document.getElementsByClassName("tab");
  x[n].style.display = "block"
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}
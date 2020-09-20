var letras = document.getElementsByClassName("letra");
var  hereE = document.getElementsByClassName("here_eng");
var  becomeE = document.getElementsByClassName("become_eng");
var  hereJ = document.getElementsByClassName("here_jap");
var  becomeJ = document.getElementsByClassName("become_jap");
var myBodyw = document.getElementById("myBodyw");
var letrasTemp = letras;
var  clicks = 0;

// optional: always refer to original list
//var letrasOrig = document.getElementsByClassName("letra");
    
var letrasOrig;

document.body.onclick = function cloneLetra() {
    
    // get the available HTML letter elements (by class)
    // beware of new elements being created?
    // original list IS groing
    letrasOrig = document.getElementsByClassName("letra");
    //console.log();
    
    //count number of elements in lista
    var nItm = letrasOrig.length;
    //console.log();
    
    // get a random number from the total eleemnts
    var rN = Math.floor(Math.random()*nItm);
    //console.log();
    
    // Get the a random element from list
    var rItm = letrasOrig[rN];
    //console.log();
    
    // Copy the <li> element and its child nodes
    var cln = rItm.cloneNode(true);
    //console.log();
    
    // Append the cloned <li> element to <ul> with id="myList1"
    document.body.appendChild(cln);
    //console.log();
    
    // get the mouse positino
    var x = event.clientX;
    var y = event.clientY;
    //console.log();
    
    // format clone css
    cln.style.cssText = 'display: block; position:absolute;left:'+x+'px;top:'+y+'px;opacity:1.0;font-size: 1em;';
    
    // atualizar listas de letras?
   // totalLetters = document.getElementsByClassName("here_eng");
    //console.log(totalLetters);
    
}



document.body.addEventListener("mousemove", function(){
        var x = event.clientX;
        var y = event.clientY;
        var w = innerWidth;
        var z = innerHeight;
    
    for(var i = 0; i<hereE.length; i++) {
       
        hereE[i].style.fontSize = 400-x/4-y/2+"px";
        hereE[i].style.transform = "rotate("+x/i*2+"deg)";
        hereE[i].style.color = 'rgb('+x+','+y+','+x/10+')';
        
        becomeE[i].style.fontSize = x-y-1150+"px";
        becomeE[i].style.transform = "rotate("+x/i*2+"deg)";
        becomeE[i].style.color = 'rgb('+y+','+x+','+y/10+')';
        
        hereJ[i].style.fontSize = 0-x/5+y/3+"px";
        hereJ[i].style.transform = "rotate("+x/i*2+"deg)";
        hereJ[i].style.color = 'rgb('+x/10+','+y/10+','+x+')';
        
        becomeJ[i].style.fontSize = x+y-1900+"px";
        becomeJ[i].style.transform = "rotate("+x/i*2+"deg)";
        becomeJ[i].style.color = 'rgb('+y+','+x/10+','+y/10+')';
        
        };
    
    document.body.style.backgroundColor = 'rgb('+x/10+','+y/10+','+x/10-y/10+')';
    
    }
);
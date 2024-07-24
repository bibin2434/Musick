var numberOfButton=document.querySelectorAll("button").length;

for(var i=0;i<numberOfButton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",picClick);
}
document.addEventListener("keypress",keyPress);
function keyPress(pres){
    var press=pres.key;
    newMeth(press);
    buttonAnimation(press);
}
function picClick(){
    var whichOne=this.innerHTML;
    newMeth(whichOne);
    
}
function myfun(){
    var rick=new Audio("sound/rick.mp3");
    rick.play();

}
function newMeth(key){
    switch(key){
        case "1":
            var accord=new Audio("sound/accordion.mp3");
            accord.play();
        
        break;
        case "2":
            var drum=new Audio("sound/drum.mp3");
            drum.play();
        break;
        case "3":
            var elect=new Audio("sound/elec guitar.wav");
            elect.play();
        break;
        case "4":
            var flute=new Audio("sound/flute.wav");
            flute.play();
        break;
        case "5":
            var piano=new Audio("sound/piano.mp3");
            piano.play();
        break;
        case "6":
            var harmon=new Audio("sound/harmonica.mp3");
            harmon.play();
        break;
        case "7":
            var sax=new Audio("sound/sax.mp3");
            sax.play();
        break;
        case "8":
            var violin=new Audio("sound/violin.wav");
            violin.play();
        break;  
        default:     
        break; 
    }   

}
function buttonAnimation(anime){
    var clas=".ins_"+ anime;
    document.querySelector(clas).classList.add("pressed");
    setTimeout(function visibleTime(){
        document.querySelector(clas).classList.remove("pressed");
    },1000)
    
}






    






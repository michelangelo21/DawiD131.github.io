

var numer = Math.floor(Math.random()*3)+1;
var timer1=0;
var timer2 =0;
function ustawslajd(nrslajdu)
{
	clearTimeout(timer1);
	clearTimeout(timer2);
	numer=nrslajdu-1;
	schowaj();
	setTimeout("slider()", 500); 
} 


function schowaj()
{
	$("#zmiana").fadeOut(500);
}
function slider()
{
	numer++; if(numer>4) numer=1;
	var plik = "<img src=\"slajdy/slajd"+ numer + ".jpg\"/>";
	$("#zmiana")[0].innerHTML=plik;

	$("#zmiana").fadeIn(500);

timer1=setTimeout("slider()",5000);
	
timer2=setTimeout("schowaj()",4500);
	
}
function powitanie()
{
var dzisiaj = new Date();
var godzina = dzisiaj.getHours();
if (godzina<12) document.getElementById("pora").innerHTML = "Dzień dobry!";
if (godzina<18) document.getElementById("pora").innerHTML = "Miłego popołudnia!";
if (godzina>19 && godzina<22) document.getElementById("pora").innerHTML = "Dobry wieczór!";
if (godzina>22 && godzina<6) document.getElementById("pora").innerHTML = "Dobranoc!";
setTimeout("odliczanie()",1000);
}
function myFunction(){
document.getElementById('start').style.display="none";
for(let i=1; i<4; i++){
  document.getElementById('erg').style.display="block";
  document.getElementById('erg').innerHTML='<img src="img/sky.jpg" width="100%">';
setTimeout(3000)
}
} 
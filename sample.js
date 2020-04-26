//console.log("connected");
var restart= document.querySelector("#b");
var sqr = document.querySelectorAll("td");
function clearboard() {
  for (var i = 0; i < sqr.length; i++) {
    sqr[i].textContent='';
  }
}
restart.addEventListener('click',clearboard);
/*var cellone = document.querySelector("#one");
cellone.addEventListener('click',function(){
  if(cellone.textContent==='')
  cellone.textContent='X';
  else if (cellone.textContent==='X') {
    cellone.textContent='O';
  }
  else {
    cellone.textContent='';
  }
})*/
function changemarker()
{
  if(this.textContent===''){
  this.textContent='X';
  var count;
  count++;
  if(count===3)
  alert("You Won the game!!!");
}
  else if(this.textContent==='X')
  this.textContent='O';
  else {
    this.textContent='';
  }
}
for (var i = 0; i < sqr.length; i++) {
  sqr[i].addEventListener('click',changemarker)
}

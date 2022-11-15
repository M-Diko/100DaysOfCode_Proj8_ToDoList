n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("item").innerHTML = document.getElementById("item").innerHTML +
" " + m + "/" + d + "/" + y;


document.findElementById("add").onclick = function(){myFunction()}

function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var inputValue = document.getElementById("input").value;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    cell1.innerHTML = inputValue;
    cell2.innerHTML = "<button onclick=\"remove(this)\">X</button>";
  }
}

document.getElementsByName("X").onclick = function(){remove(this)}

function remove(row){
    var index = row.parentNode.parentNode;
    document.getElementById("myTable").deleteRow(index.rowIndex);
}
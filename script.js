var form = document.querySelector("form");
var log = document.querySelector("#log");
var point = 0;

form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
  		if(entry[0]=="question1" && entry[1]=="reponse1"){
  			point++;
  		}
  		if(entry[0]=="question2" && entry[1]=="reponse1"){
  			point++;
  		}
  		if(entry[0]=="question3" && entry[1]=="reponse2"){
  			point++;
  		}
  		if(entry[0]=="question1" && entry[1]=="reponse1"){
  			point++;
  		}
  };
  output = "Vous avez " + point + " point(s)";
  log.innerText = output;
  event.preventDefault();
}, false);
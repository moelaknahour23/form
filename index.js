
var button;

function buttonrest(){

	 reloadPage();
}

function background_Color(){

	document.body.style.backgroundColor ="Red"; 
}

function buttonClicked(){
 var txt1= document.getElementById("fName").value;
var txt2= document.getElementById("lName").value;
var txt3= document.getElementById("sId").value;
var txt4= document.getElementById("TextArea").value;
var tokens = txt4.split(" ");



if(!(txt1).match(/^[A-Z][A-Za-z]+$/)){


		document.getElementById("printTxt1").innerHTML = "Please enter your First Name, with the first letter capitalized";
		background_Color();
	}

if(!(txt2).match(/^[A-Z][A-Za-z]+$/))  {

		document.getElementById("printTxt2").innerHTML = "Please enter your last Name, with the first letter capitalized";
		background_Color();
}    


if(!(txt3).match(/^\d{9}$/))  {

		document.getElementById("printTxt3").innerHTML = "Please enter a 9 digit Student ID Number";
		background_Color();
}          


if(tokens.length > 25){
	
	document.getElementById("printTxt4").innerHTML = "Message should not be more than 25 words."; 
	background_Color();
	
}


if( (txt1.length!=0 ) || (txt2.length!=0) || (txt3.length!=0 ) ) {

		document.getElementById("printTxt5").innerHTML= 
		("<br>First Name: " + txt1 + "<br> Last Name: " + txt2 + 
		"<br> Student ID Number: "+ txt3 +"<br> Message: "+ txt4+"<br><br> Success!"); 

	}

	else{
		start();
	}		    
 
}


function reloadPage(){
   window.location.reload();
}

function start(){

	button = document.getElementById("but");
	button2 = document.getElementById("res");

	button.addEventListener("click", buttonClicked, false);
	button2.addEventListener("click", buttonrest, false);

}


	window.addEventListener( "load", start, false);

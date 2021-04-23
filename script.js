function gethistory(){
    return document.getElementById("history-value").innerText;
}
function printhistory(num){
    document.getElementById("history-value").innerText=num;
}
function getoutput(){
    return document.getElementById("output-value").innerText;
}
function printoutput(num){
    if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}



// click event for operators
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click',function(){
       if(this.id=="clear")
       {
           printoutput("");
           printhistory("");
       }
       else if(this.id=="backspace")
       {
           var output=reverseNumberFormat(getoutput()).toString();
           if(output)//if output has value
           {
               output=output.substr(0,output.length-1);
               printoutput(output);
           }
       }
       else
       {
           var output=getoutput();
           var history=gethistory();
           if(output!="")
           {
              // output=reverseNumberFormat(output);
                history=history+output;
                if(this.id=="=")
                {
                    var result=eval(history);
                    printoutput(result);
                    printhistory("");
                }
                else
                {
                    history=history+this.id;
                    printhistory(history);
                    printoutput("");
                }
           }
       }
    })
}
// click event for numbers
var number = document.getElementsByClassName("numbers");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getoutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printoutput(output);
		}
	});
}